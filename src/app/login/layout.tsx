export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center h-min-screen bh-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div>
    )
}