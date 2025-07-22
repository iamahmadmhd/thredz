export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen flex items-center justify-center w-full max-w-md mx-auto px-4'>
            {children}
        </div>
    );
}
