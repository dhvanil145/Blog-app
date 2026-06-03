import Footer from "@/components/section/Footer";
import Nav from "@/components/section/Nav";


export default function MainLayout({children}:{children:React.ReactNode}){
    return (
        <>
        <Nav />
        <main className="mt-16 max-w-7xl mx-auto">{children}</main>
        <Footer />
        </>
    )

}