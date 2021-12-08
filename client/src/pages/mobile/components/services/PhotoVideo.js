function PhotoVideo({ set, option }) {
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
            <h1>Photo and Video </h1>
            <i
              onClick={() => {
                goBack();
              }}
              className=" text-center fas  fa-times"
            ></i>
          </div>
          <p>
            Photography is an art of capturing the what we see on to a film/
            digital reel. It’s not just pointing the camera at something and
            pressing that button. It takes years to learn and even more to get
            great at it and we have been doing it for even more. We mainly excel
            in Commercial Photo and Video shoots so we can show your customers
            what your brand stands for. What’s that story behind every product
            of your brand that makes it stand out in the market, so they’re not
            just buying your products but their stories along with it. Here are
            things that we do:
          </p>
          <ul>
            <li>Campaign Shoots</li>
            <li>Organising the campaigns</li>
            <li>Concept shoots</li>
            <li>E-Commerce Photoshoots</li>
            <li>Music Videos</li>
            <li>Reels </li>
            <li>Youtube Videos </li>
            <li>Interviews </li>
            <li>Podcasts </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default PhotoVideo;
