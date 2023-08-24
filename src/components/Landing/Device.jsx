export default function Device({ imgSrc }) {
    return (
        <div>
          <div>
            <img src={imgSrc} />
          </div>
          <img src="/mobile-frame.svg"alt="Mobile Device"/>
        </div>
      );
}