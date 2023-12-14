import ScrollComponent from "@/components/scroll.component";
import NavbarComponent from "@/components/navbar.component";
import FooterComponent from "@/components/footer.component";

export default function NormalPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollComponent>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </ScrollComponent>
  );
}
