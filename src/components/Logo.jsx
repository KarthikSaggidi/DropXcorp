export default function Logo({ dark }) {
  return (
    <img
      src={dark ? "/footer-logo.png" : "/logo.png"}
      alt="DropXcorp"
      className="main-logo"
    />
  );
}