export default function Layout({ children, ...props }) {
    return (
        <div className="layout">
            <div className="content">
                {children}
            </div>
        </div>
    )
}