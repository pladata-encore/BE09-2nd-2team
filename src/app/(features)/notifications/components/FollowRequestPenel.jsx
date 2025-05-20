"use client";

import BackButton from "./BackButton";
import FollowItem from "./FollowItem";

export default function FollowRequestPanel({ onBack }) {
  return (
    <div
      style={{
        width: "400px",
        height: "100vh",
        backgroundColor: "white",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "7px",
          marginBottom: "-26px",
          marginTop: "3px",
        }}
      >
        <BackButton onClick={onBack} />
        <h4 style={{ marginLeft: "90px" }}>팔로우 요청</h4>
      </div>
      <FollowItem
        user="AkiYama"
        profile="/images/noti/profile_10.jpg"
        name="아조씨"
      />
      <FollowItem
        user="Last_DanXXX"
        profile="/images/search/profile2.png"
        name="김대성"
      />
      <FollowItem
        user="One_punch_King99"
        profile="/images/search/profile3.png"
        name="랄프"
      />
      <FollowItem
        user="xxxidragon"
        profile="/images/search/profile4.png"
        name="인지용"
      />
      <h4 style={{ marginLeft: "20px" }}>회원님을 위한 추천</h4>
      <FollowItem
        user="kikwan_seol"
        profile="/images/search/profile5.png"
        recomend="1"
        btmmessage={"firstV님 외 12명이 팔로우"}
      />
      <FollowItem
        user="Cute_Princess"
        profile="/images/search/profile6.png"
        name=""
        recomend="1"
        btmmessage={"회원님을 위한 추천"}
      />
      <FollowItem
        user="It's_Me"
        profile="/images/search/profile7.png"
        name="미친존재감"
        recomend="1"
        btmmessage={"forUUS님 외 4명이 팔로우 "}
      />
      <FollowItem
        user="one_lastweek"
        profile="/images/profile/profile1.jpg"
        name="한주전"
        recomend="1"
      />
    </div>
  );
}
