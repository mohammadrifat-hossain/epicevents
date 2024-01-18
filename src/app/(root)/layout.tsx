import dynamic from 'next/dynamic'
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const RootLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <html className="flex h-screen flex-col">
                <body className="flex-1">
                    <Header/>
                        {children}
                    <Footer/>
                </body>
        </html>
    );
}
export default RootLayout