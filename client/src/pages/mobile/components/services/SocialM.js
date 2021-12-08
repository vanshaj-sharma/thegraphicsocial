function SocialM({ set, option }) {
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
            <h1>Social Marketing</h1>
            <i
              onClick={() => {
                goBack();
              }}
              className="  text-center fas  fa-times"
            ></i>
          </div>
          <p>
            Social media is today’s newspaper for both the young and the old.
            Everybody is hooked on their devices the first thing in the morning.
            That means your all the world’s attention is there, spread across a
            handful of platforms i.e. Instagram, Facebook and Twitter. How can
            we help you?
          </p>
          <ul>
            <li>We will strategise what goes on your social media</li>
            <li>Design your posts</li>
            <li>
              Organise photo and video shoots if that’s what your brand needs
              for the content
            </li>
            <li>
              Manage all your social media handles including posting on
              scheduled times, interacting with your audience and getting them
              to know your brand better
            </li>
            <li>
              Plan everything ahead of time so you don’t have to worry about
              what is it that you need to post
            </li>
            <li>
              Research the market and hop on the trends as they come to maximise
              your brand’s reach
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SocialM;
