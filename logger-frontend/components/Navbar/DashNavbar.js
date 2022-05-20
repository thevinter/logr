import { Navbar, Button, Alignment, Colors } from "@blueprintjs/core";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./DashNavbar.module.css";

export default function DashNavbar() {
  const router = useRouter();

  const LogsLink = <Link href="/logs"></Link>;

  return (
    <Navbar style={{ color: "#F4F7F5", backgroundColor: "#4C4E60" }}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Mindgear</Navbar.Heading>
        <Navbar.Divider />
        <Button
          style={{ color: "#F4F7F5" }}
          className="bp4-minimal"
          icon="home"
          text="Home"
        />
        <Link passHref href="/logs">
          <Button
            style={{ color: "#F4F7F5" }}
            className="bp4-minimal"
            icon="document"
            text="Logs"
          />
        </Link>
      </Navbar.Group>
    </Navbar>
  );
}
