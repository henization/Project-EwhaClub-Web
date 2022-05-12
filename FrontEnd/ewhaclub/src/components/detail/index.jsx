import { Line, StyledRoot } from "./style";
// import { useLocation } from "react-router-dom";
// import QueryString from "qs";
// import { getClubData } from "apis/detail.api";
import { useEffect, useState } from "react";
import dummy from "db/detailData.json";

import DetailHeader from "./DetailHeader";
import DetailInfo from "./DetailInfo";

const ClubDetail = () => {
  const [club, setClub] = useState([]);
  // const location = useLocation();

  // const { id } = QueryString.parse(location.search, {
  //   ignoreQueryPrefix: true,
  // });

  const setClubData = async () => {
    // const club = await getClubData(id);
    // setClub(club);
    setClub(dummy.data[0]);
  };

  useEffect(() => {
    setClubData();
  }, []);

  return (
    <StyledRoot>
      <DetailHeader club={club} />
      <Line />
      <DetailInfo club={club} />
    </StyledRoot>
  );
};

export default ClubDetail;
