function Designing({ set, option }) {
  const goBack = () => {
    let service__heads = document.querySelectorAll(".service__heads");
    service__heads[option].classList.remove("heading__deactivate");
    set("");
  };
  return (
    <>
      <div className="brand__box">
        <div className="s_brand">
          <div className="box">
            <h1>Designing</h1>
            <i
              onClick={() => {
                goBack();
              }}
              className="  text-center fas  fa-times"
            ></i>
          </div>
          <p>
            A good design can go a long way in defining your brand image and how
            responsible you are about the details. Designing isn’t just putting
            together a banner or a poster. A badly designed banner or poster,
            wrong choice of fonts and elements, bad alignments can ruin your
            brand image and show that your brand doesn’t know what its doing. A
            menu with bad font in a restaurant can strain your eyes, a badly
            designed poster can mislead the customer, a bad alignment of
            elements can say your brand isn’t organised and not worth the time
            of the customer. We can design everything for you:
          </p>
          <ul>
            <li>Websites</li>
            <li>Logo</li>
            <li>Letter Heads</li>
            <li>Menus</li>
            <li>Posters</li>
            <li>Banners</li>
            <li>Social Media Templates</li>
            <li>Advertisements</li>
            <li>Brochures</li>
            <li>Company Profiles and much more</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Designing;
