import {
  Category,
  Hits,
  ImgWrapper,
  LeftSection,
  RightSection,
  ShortDesc,
  Sns,
  State,
  StyledRoot,
  TagsWrapper,
  Title,
} from "./style";
import { EmptyHeart, InstaIcon, YoutubeIcon } from "asset/icons";
import { colors } from "styles/styleObj";

const category_color = {
  공연: `${colors.red.light}`,
  문화: `${colors.orange.origin}`,
  사회과학: `${colors.yellow.light}`,
  사회연대: `${colors.green.origin}`,
  종교: `${colors.blue.light}`,
  체육: `${colors.purple.light}`,
  학술: `${colors.purple.origin}`,
};
const state_color = {
  0: {
    color: `${colors.black.light_grey_1}`,
    border: `${colors.black.light_grey_1}`,
  },
  1: {
    color: `${colors.white.origin}`,
    border: `${colors.black.light_grey_1}`,
  },
};

const DetailHeader = ({ club }) => {
  return (
    <StyledRoot>
      <LeftSection>
        <Title>
          <h1>{club.name}</h1>
          <Sns>
            <img src={InstaIcon} alt="인스타" />
            <img src={YoutubeIcon} alt="유튜브" />
          </Sns>
        </Title>
        <ShortDesc>{club.short_description}</ShortDesc>
        <TagsWrapper>
          <Category color={category_color[club.category_name]}>
            {club.category_name}
          </Category>
          <State color={state_color[club.is_recruiting]}>
            {club.is_recruiting ? "모집중" : "모집마감"}
          </State>
        </TagsWrapper>
      </LeftSection>
      <RightSection>
        <ImgWrapper>
          <img src={club.main_img_url} alt={club.name}></img>
        </ImgWrapper>
        <div>
          <Hits>조회수 {club.view_cnt}</Hits>
          <img src={EmptyHeart} alt="좋아요" />
        </div>
      </RightSection>
    </StyledRoot>
  );
};

export default DetailHeader;