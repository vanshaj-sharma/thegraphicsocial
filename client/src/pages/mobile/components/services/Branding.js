import "./styles/Branding.css";
function Branding({ set, option }) {
  const goBack = () => {
    let service__heads = document.querySelectorAll(".service__heads");
    service__heads[option].classList.remove("heading__deactivate");
    set("");
  };
  return (
    <>
      <div className="brand__box">
        {/* <h1 className="s_title">SERVICES</h1> */}
        <div className="s_brand">
          <div className="box">
            <h1>Branding</h1>
            <i
              onClick={() => {
                goBack();
              }}
              className=" text-center fas  fa-times"
            ></i>
          </div>
          <p>
            Branding is something that defines your brand and lets your
            customers realise what you stand for. This doesn’t just include
            making Logos, this involves making a strategy about what to say and
            how to say it to your audience so they not only can see what you’re
            offering but why you’re doing what you’re doing. This involves:
          </p>
          <ul>
            <li>Logo</li>
            <li>Packings</li>
            <li>
              Brand Strategy -- How to strategise your brand to strengthen the
              vision behind your brand in eyes of your audience
            </li>
            <li>
              Messaging -- What you say to your audience across different
              platforms
            </li>
            <li>Brand Kit</li>
            <li>Market Analysis and Evaluation</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Branding;
