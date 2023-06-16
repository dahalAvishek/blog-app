import Links from "./Links";

const Footer = () => {
  return (
    <div className="bg-slate-600 border-t-2 border-slate-400 flex justify-between p-4">
      <section>
        <h3>Contact the Publisher</h3>
        <p>dahalavisek2022@gmail.com</p>
        <p>+9779844655740</p>
      </section>
      <section>
        <h3>Headquater</h3>
        <p>Grande Hospital Road, Tokha</p>
        <p>Kathmandu, Bagmati province</p>
        <p>Nepal</p>
      </section>
      <section>
        <h3>Contact Information</h3>
        <Links />
      </section>
    </div>
  );
};

export default Footer;
