import Footer from "@/components/ui/Footer";
import Nav from "@/components/ui/Nav";

export default function MainLayout({children}:{children:React.ReactNode}){
    return (
        <>
        <Nav />
        <main>{children}</main>
        <Footer />
        </>
    )

}