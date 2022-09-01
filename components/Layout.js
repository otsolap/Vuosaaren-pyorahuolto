import Sidebar from '@components/navigation/Sidebar'

export default function Layout({ children, ...props }) {
    return (
        <div className="layout">
            <main className="content">
                {children}
            </main>
            <Sidebar />
        </div>
    )
}