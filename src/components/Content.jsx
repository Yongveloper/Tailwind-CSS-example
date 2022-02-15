import ImageOne from '../images/egg.jfif';
import ImageTwo from '../images/egg2.jfif';

function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">달걀 음식: 샥슈카</h2>
          <p className="mb-2">
            샥슈카는 빨간 토마토소스에 수란을 반숙 상태로 얹어 먹는 요리로 '에그
            인 헬'이라고 부르기도 합니다
          </p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">달걀 음식: 다마고야키</h2>
          <p className="mb-2">
            재패니즈 오믈렛이라고도 불리는 타마고야키는 일본식 계란 말이입니다.
            한국의 계란말이에 비해 더 달콤하고 촉촉한 것이 특징입니다.
          </p>
          <span>$20</span>
        </div>
      </div>
    </>
  );
}

export default Content;
