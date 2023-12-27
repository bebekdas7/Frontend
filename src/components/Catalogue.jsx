import "../cssfiles/catalogue.css";
import CC from "./catalogue-container/CC";

const Catalogue = () => {
  return (
    <div className="catalogue-fluid container-fluid">
      <h1 className="catalogue-header">Explore Categories</h1>
      <h2 className="catalogue-subheader m-auto text-center">
        Grab Your Favourites
      </h2>
      <div className="catalogue">
        <CC src="/images/bs2.jpg" hover="/images/bs1.jpg" title="Basics" />
        <CC src="/images/ov1.jpg" hover="/images/ov2.jpg" title="Oversized" />
        <CC src="/images/polo1.jpeg" hover="/images/polo2.jpeg" title="Polo" />
      </div>
    </div>
  );
};

export default Catalogue;
