import { formatFileSize } from '@/lib/fileSizeFormat'
import { useCallback, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const [file, setFile] = useState<File | null>(null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return

        const selectedFile = acceptedFiles[0]
        setFile(selectedFile)
        onFileSelect?.(selectedFile)

    }, [onFileSelect])

    const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
        const error = fileRejections[0]?.errors[0]

        if (!error) return

        switch (error.code) {
            case 'file-too-large':
                toast.error('File size too large')
                break
            case 'file-invalid-type':
                toast.error('Only PDF files are allowed')
                break
            case 'too-many-files':
                toast.error("Can't upload more than 1 file at a time")
                break
            default:
                toast.error('Invalid file')
        }
    }, [])

    const handleFileRemove = () => {
        setFile(null)
    }

    const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: 20 * 1024 * 1024, // 20mb
        onDropRejected
    })

    return (
        <div className={`w-full gradient-border transition-all ${isDragActive && 'opacity-70'}`}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className='space-y-4 cursor-pointer relative'>

                    {file ?
                        <div className='flex items-center justify-between'>
                            <img src={'/images/pdf.png'} alt='pdf' className='size-10' />
                            <div className='flex items-center space-x-3'>
                                <div className='flex items-center justify-center flex-col'>
                                    <p className='text-lg text-gray-700 font-medium truncate max-w-xs'>
                                        {file.name}
                                    </p>
                                    <p className='text-sm text-gray-500'>
                                        {formatFileSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className='p-2 rounded-2xl cursor-pointer hover:bg-gray-300 transition-colors' type='button' onClick={(e) => { handleFileRemove(); e.stopPropagation() }}>
                                <img src="/icons/cross.svg" alt="remove" className='size-4' />
                            </button>
                        </div>
                        :
                        <div className='flex flex-col items-center'>
                            <div className='mx-auto w-16 h-16 flex items-center justify-center'>
                                <img src="/icons/info.svg" alt="upload" className='size-20' />
                            </div>
                            <p className='text-lg flex gap-1 text-gray-500'>
                                <span className='font-semibold'>
                                    Click to upload
                                </span>
                                or drag and drop
                            </p>
                            <p className='text-lg text-gray-500'>PDF (max 20mb)</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FileUploader