import React from "react";

import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { List } from "components/List";

const LandingPagePage = () => {
  const navigate = useNavigate();

  const handleNavigate15 = () => navigate("/solution");
  const handleNavigate14 = () => navigate("/customer");
  const handleNavigate13 = () => navigate("/pricing");

  return (
    <>
      <Column className="bg-white_A700 font-bevietnampro items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-indigo_902 items-center justify-start xl:pb-[112px] pb-[127px] 3xl:pb-[152px] lg:pb-[98px] lg:pt-[30px] xl:pt-[34px] pt-[39px] 3xl:pt-[46px] px-[100px] 3xl:px-[120px] lg:px-[77px] xl:px-[88px] w-[100%]">
          <header className="mx-[auto] w-[86%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_logo_3.png"}
                className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] object-contain w-[3%]"
                alt="Logo"
              />
              <Text className="cursor-pointer hover:font-semibold font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:my-[11px] my-[12.5px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[auto]">{`GroundDesk`}</Text>
              <Row className="items-center justify-center lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[201px] xl:ml-[230px] ml-[259.66px] 2xl:ml-[259px] 3xl:ml-[311px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] w-[23%]">
                <Text
                  className="common-pointer cursor-pointer font-normal hover:font-semibold not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                  onClick={handleNavigate15}
                >{`Solution`}</Text>
                <Text
                  className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                  onClick={handleNavigate14}
                >{`Customer`}</Text>
                <Text
                  className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                  onClick={handleNavigate13}
                >{`Pricing`}</Text>
              </Row>
              <Button className="border border-solid border-white_A700 font-normal lg:ml-[192px] xl:ml-[220px] ml-[248px] 3xl:ml-[297px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[11%]">{`Login`}</Button>
              <Button className="bg-white_A700 font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-deep_purple_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[11%]">{`Sign up`}</Button>
            </Row>
          </header>
          <Stack className="lg:h-[126px] xl:h-[145px] h-[162px] 2xl:h-[163px] 3xl:h-[195px] lg:mt-[104px] xl:mt-[119px] mt-[134px] 3xl:mt-[160px] mx-[auto] w-[64%]">
            <Text className="absolute capitalize font-bold inset-[0] lg:leading-lh63 xl:leading-lh72 2xl:leading-lh81 leading-lh8100 3xl:leading-lh97 text-center lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-white_A700 tracking-ls1 w-[100%]">
              <span className="text-white_A700 font-bevietnampro">
                <>{`We help to get `}</>
              </span>
              <span className="text-cyan_300 font-bevietnampro">
                <>{`business`}</>
              </span>
              <span className="text-white_A700 font-bevietnampro">
                <>{` solution ever`}</>
              </span>
            </Text>
            <Text className="absolute capitalize font-bold right-[5.9%] text-cyan_301 lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-left top-[-4%] tracking-ls1 underline w-[auto]">{`Business`}</Text>
          </Stack>
          <Text className="font-normal lg:leading-lh24 xl:leading-lh28 2xl:leading-lh32 leading-lh3200 3xl:leading-lh38 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs13 xl:text-fs15 text-fs17 3xl:text-fs20 text-white_A700 tracking-ls1 w-[40%]">{`We provide many features that you can use cheaply and easily. Try it now and get an interesting promo`}</Text>
          <Row className="items-center justify-center lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] mx-[auto] w-[27%]">
            <Button className="bg-white_A700 font-normal not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center text-deep_purple_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[44%]">{`Try for free`}</Button>
            <Button className="border border-solid border-white_A700 font-normal lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[50%]">{`Watch a demo`}</Button>
          </Row>
          <Stack className="lg:h-[546px] xl:h-[624px] h-[701px] 2xl:h-[702px] 3xl:h-[842px] lg:mt-[59px] xl:mt-[68px] mt-[77px] 3xl:mt-[92px] mx-[auto] w-[73%]">
            <Image
              src={"images/img_dashboarddar.png"}
              className="absolute lg:h-[546px] xl:h-[624px] h-[701px] 2xl:h-[702px] 3xl:h-[842px] object-contain right-[0] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] w-[50%]"
              alt="DashboardDar"
            />
            <Image
              src={"images/img_dashboardlig.png"}
              className="absolute lg:h-[546px] xl:h-[624px] h-[701px] 2xl:h-[702px] 3xl:h-[842px] left-[0] object-contain rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[50%]"
              alt="DashboardLig"
            />
          </Stack>
        </Column>
        <Row className="bg-gray_100 items-center justify-start xl:pl-[106px] pl-[120px] 3xl:pl-[144px] lg:pl-[93px] pr-[104px] 3xl:pr-[124px] lg:pr-[80px] xl:pr-[92px] xl:py-[105px] py-[119px] 3xl:py-[142px] lg:py-[92px] w-[100%]">
          <Column className="items-start lg:mb-[28px] xl:mb-[32px] mb-[36px] 3xl:mb-[43px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] w-[37%]">
            <Text className="font-bold leading-lh15000 lg:text-fs40 xl:text-fs46 text-fs52 3xl:text-fs62 text-gray_900 text-left tracking-ls1 w-[100%]">{`Easy collaborative financial team`}</Text>
            <Text className="font-normal leading-lh17000 lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls1 w-[71%]">{`No need to worry about your files being lost because we are very loyal to be your storage platform.`}</Text>
            <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
              <Row className="items-center justify-start lg:pr-[141px] xl:pr-[161px] pr-[182px] 3xl:pr-[218px] w-[100%]">
                <Stack className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] w-[13%]">
                  <Image
                    src={"images/img_mask_3.png"}
                    className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[0] object-contain rounded-radius50 w-[auto]"
                    alt="Mask"
                  />
                  <Image
                    src={"images/img_mask_4.png"}
                    className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] left-[22%] object-contain rounded-radius50 w-[auto]"
                    alt="Mask"
                  />
                  <Image
                    src={"images/img_mask_5.png"}
                    className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[22%] rounded-radius50 w-[auto]"
                    alt="Mask"
                  />
                  <Image
                    src={"images/img_mask_6.png"}
                    className="absolute lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[0] rounded-radius50 w-[auto]"
                    alt="Mask"
                  />
                </Stack>
                <Text className="font-semibold xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] my-[1px] text-bluegray_900 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-left tracking-ls1 w-[auto]">{`More than 10,000 people have tried`}</Text>
              </Row>
            </Column>
            <Button className="bg-deep_purple_A200 font-semibold lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[33%]">{`Try for free`}</Button>
          </Column>
          <Column className="bg-gray_50 font-dmsans items-center lg:ml-[39px] xl:ml-[45px] ml-[51px] 3xl:ml-[61px] outline outline-[10px] outline-indigo_902 rounded-radius105 w-[44%]">
            <Row className="bg-white_A700 border-bluegray_500_33 border-bw044 border-solid items-center justify-end pb-[6.13px] pt-[6.12px] lg:px-[15px] xl:px-[17px] px-[19.69px] 2xl:px-[19px] 3xl:px-[23px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[100%]">
              <Image
                src={"images/img_frame2.svg"}
                className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mb-[3.49px] mt-[3.51px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[6%]"
                alt="Frame2"
              />
              <Image
                src={"images/img_browser1.svg"}
                className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] mb-[1.74px] lg:ml-[22px] xl:ml-[26px] ml-[29.31px] 2xl:ml-[29px] 3xl:ml-[35px] mt-[1.76px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                alt="browser1"
              />
              <Image
                src={"images/img_frame3.svg"}
                className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] mb-[1.74px] ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1.76px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain w-[4%]"
                alt="Frame3"
              />
              <CircularProgressbar
                className="h-[10.06px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mb-[1.75px] 2xl:mb-[1px] lg:ml-[44px] xl:ml-[50px] ml-[56.87px] 2xl:ml-[56px] 3xl:ml-[68px] mt-[2.19px] 2xl:mt-[2px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] overflow-visible w-[10.06px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                value="49"
                counterClockwise
                name="Group76"
                strokeWidth={50}
                styles={{
                  trail: { strokeWidth: 50, stroke: "" },
                  path: {
                    strokeLinecap: "square",
                    height: "100%",
                    "transform-origin": "center",
                    transform: "rotate(90deg)",
                    stroke: "#6d7d93",
                  },
                }}
              ></CircularProgressbar>
              <Row className="bg-gray_101 items-center justify-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] ml-[8.75px] 2xl:ml-[8px] my-[0] pb-[2.93px] 2xl:pb-[2px] pl-[100.19px] 2xl:pl-[100px] 3xl:pl-[120px] lg:pl-[77px] xl:pl-[89px] 3xl:pr-[10px] lg:pr-[6px] xl:pr-[7px] pr-[8.75px] 2xl:pr-[8px] pt-[3.07px] 2xl:pt-[3px] xl:py-[2px] lg:py-[2px] 3xl:py-[3px] rounded-radius219 w-[40%]">
                <Image
                  src={"images/img_lock.svg"}
                  className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] my-[1px] object-contain xl:w-[4px] lg:w-[4px] w-[5.25px] 2xl:w-[5px] 3xl:w-[6px]"
                  alt="lock"
                />
                <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4.37px] 2xl:ml-[4px] 3xl:ml-[5px] my-[0] not-italic text-bluegray_500 lg:text-fs4 xl:text-fs5 2xl:text-fs6 text-fs6125000476837158 3xl:text-fs7 text-left tracking-ls11 w-[auto]">{`Groundesk.com`}</Text>
                <Image
                  src={"images/img_refreshccw.svg"}
                  className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] ml-[85.94px] 2xl:ml-[85px] my-[1px] object-contain xl:w-[4px] lg:w-[4px] w-[5.25px] 2xl:w-[5px] 3xl:w-[6px]"
                  alt="refreshccw"
                />
              </Row>
              <Image
                src={"images/img_frame5.svg"}
                className="3xl:h-[10px] h-[7.88px] lg:h-[7px] 2xl:h-[8px] xl:h-[8px] mb-[3.05px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] ml-[88.81px] 2xl:ml-[88px] mt-[3.07px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain w-[9%]"
                alt="Frame5"
              />
            </Row>
            <Stack className="lg:h-[329px] xl:h-[376px] h-[421.75px] 2xl:h-[423px] 3xl:h-[507px] mx-[auto] w-[98%]">
              <Stack className="absolute lg:h-[329px] xl:h-[376px] h-[421.75px] 2xl:h-[423px] 3xl:h-[507px] inset-[0] w-[100%]">
                <Stack className="absolute lg:h-[329px] xl:h-[376px] h-[421.75px] 2xl:h-[423px] 3xl:h-[507px] inset-[0] w-[100%]">
                  <Row className="absolute items-start justify-start left-[0] w-[82%]">
                    <Column className="bg-white_A700 items-center justify-start lg:pb-[23px] xl:pb-[27px] pb-[30.62px] 2xl:pb-[30px] 3xl:pb-[36px] lg:pt-[15px] xl:pt-[17px] pt-[20.13px] 2xl:pt-[20px] 3xl:pt-[24px] w-[8%]">
                      <Image
                        src={"images/img_logo_4.png"}
                        className="lg:h-[13px] h-[15.75px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mx-[auto] object-contain w-[41%]"
                        alt="Logo"
                      />
                      <Row className="items-start justify-start lg:mt-[20px] xl:mt-[23px] mt-[26.25px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] w-[100%]">
                        <Line className="bg-indigo_600 lg:h-[13px] h-[15.75px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:mb-[108px] mb-[121.62px] 2xl:mb-[121px] 3xl:mb-[146px] lg:mb-[94px] rotate-[90deg] w-[1.31px]" />
                        <Image
                          src={"images/img_frame7.svg"}
                          className="lg:h-[105px] xl:h-[120px] h-[134.31px] 2xl:h-[135px] 3xl:h-[162px] lg:ml-[10px] xl:ml-[11px] ml-[13.13px] 2xl:ml-[13px] 3xl:ml-[15px] xl:mt-[2px] lg:mt-[2px] mt-[3.06px] 3xl:mt-[3px] 2xl:mt-[3px] object-contain w-[28%]"
                          alt="Frame7"
                        />
                      </Row>
                      <Image
                        src={"images/img_settings.svg"}
                        className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] lg:mt-[115px] xl:mt-[132px] mt-[148.75px] 2xl:mt-[148px] 3xl:mt-[178px] mx-[auto] object-contain opacity-op4 w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                        alt="settings"
                      />
                      <Image
                        src={"images/img_logout.svg"}
                        className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] lg:mt-[17px] xl:mt-[19px] mt-[21.88px] 2xl:mt-[21px] 3xl:mt-[26px] mx-[auto] object-contain opacity-op4 w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                        alt="logout"
                      />
                    </Column>
                    <Text className="font-bold lg:mb-[298px] xl:mb-[340px] mb-[383.25px] 2xl:mb-[383px] 3xl:mb-[460px] lg:ml-[15px] xl:ml-[17px] ml-[19.68px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[13px] xl:mt-[15px] mt-[17.5px] 2xl:mt-[17px] 3xl:mt-[21px] text-black_900 lg:text-fs12 xl:text-fs14 2xl:text-fs15 text-fs15750001907348633 3xl:text-fs18 text-left tracking-ls11 w-[auto]">{`Dashboard`}</Text>
                    <Row className="bg-white_A700 items-center justify-center lg:mb-[298px] xl:mb-[341px] mb-[383.63px] 2xl:mb-[383px] 3xl:mb-[460px] lg:ml-[168px] xl:ml-[192px] ml-[216.07px] 2xl:ml-[216px] 3xl:ml-[259px] lg:mt-[14px] xl:mt-[16px] mt-[18.37px] 2xl:mt-[18px] 3xl:mt-[22px] pb-[4.37px] 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] pl-[8.75px] 2xl:pl-[8px] lg:pr-[27px] xl:pr-[31px] pr-[35.01px] 2xl:pr-[35px] 3xl:pr-[42px] pt-[4.38px] xl:py-[3px] lg:py-[3px] 2xl:py-[4px] 3xl:py-[5px] rounded-radius35 w-[30%]">
                      <Image
                        src={"images/img_search.svg"}
                        className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] mb-[1px] mt-[0] object-contain w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                        alt="search"
                      />
                      <Text className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13.12px] 2xl:ml-[13px] 3xl:ml-[15px] my-[0] not-italic text-bluegray_500 lg:text-fs4 xl:text-fs5 2xl:text-fs6 text-fs6125000476837158 3xl:text-fs7 text-left tracking-ls11 w-[auto]">{`Search for transaction, item, etc`}</Text>
                    </Row>
                  </Row>
                  <div className="absolute bg-indigo_600 lg:h-[52px] xl:h-[59px] h-[65.62px] 2xl:h-[66px] 3xl:h-[79px] left-[10%] rounded-radius525 shadow-bs1 top-[14%] w-[15%]"></div>
                  <div className="absolute backdrop-opacity-[0.5] bg-white_A700_26 blur-[30.63px] lg:h-[44px] xl:h-[51px] h-[56.44px] 2xl:h-[57px] 3xl:h-[68px] left-[5%] rounded-radius50 top-[15%] lg:w-[43px] xl:w-[50px] w-[56.44px] 2xl:w-[56px] 3xl:w-[67px]"></div>
                  <Column className="absolute bottom-[0] items-start justify-start left-[10%] w-[65%]">
                    <Column className="w-[100%]">
                      <Column className="bg-white_A700 border-bluegray_500_26 border-bw044 border-solid lg:pb-[10px] xl:pb-[11px] pb-[13.13px] 2xl:pb-[13px] 3xl:pb-[15px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] pt-[8.74px] 2xl:pt-[8px] rounded-radius525 shadow-bs2 w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-start lg:pl-[10px] xl:pl-[11px] pl-[13.13px] 2xl:pl-[13px] 3xl:pl-[15px] lg:pr-[16px] xl:pr-[18px] pr-[20.68px] 2xl:pr-[20px] 3xl:pr-[24px] w-[100%]">
                            <Column className="items-start lg:mb-[4px] xl:mb-[5px] mb-[6.13px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[3.94px] 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] w-[3%]">
                              <Text className="font-bold text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`140k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`120k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`100k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`80k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`60k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`40k`}</Text>
                              <Text className="font-bold mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`20k`}</Text>
                              <Text className="font-bold lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] mt-[10.5px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`0k`}</Text>
                            </Column>
                            <Stack className="lg:h-[109px] xl:h-[125px] h-[139.56995px] 2xl:h-[140px] 3xl:h-[168px] xl:ml-[4px] lg:ml-[4px] ml-[5.37px] 2xl:ml-[5px] 3xl:ml-[6px] w-[87%]">
                              <Stack className="absolute lg:h-[109px] xl:h-[125px] h-[139.57px] 2xl:h-[140px] 3xl:h-[168px] inset-[0] w-[100%]">
                                <Stack className="absolute lg:h-[106px] xl:h-[121px] h-[135.19px] 2xl:h-[136px] 3xl:h-[163px] inset-[0] justify-center m-[auto] w-[100%]">
                                  <Line className="absolute bg-bluegray_500 lg:h-[106px] xl:h-[121px] h-[135.19px] 2xl:h-[136px] 3xl:h-[163px] left-[0] rotate-[90deg] w-[0.22px]" />
                                  <Image
                                    src={"images/img_group6356079.png"}
                                    className="absolute bottom-[0] xl:h-[101px] h-[112.66px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[88px] object-cover w-[100%]"
                                    alt="Group6356079"
                                  />
                                </Stack>
                                <Row className="absolute items-center justify-between right-[0] top-[0] w-[35%]">
                                  <div className="bg-transparent border-0 w-[51%] input-wrap">
                                    <Image
                                      src={"images/img_vector.svg"}
                                      className="absolute right-[10.070068px] bg-transparent border-0 lg:right-[7px] xl:right-[8px] 2xl:right-[10px] 3xl:right-[12px] my-[auto] inset-y-[0]"
                                      alt="Vector"
                                    />
                                    <Input
                                      className="placeholder:bg-transparent bg-white_A700 border-bluegray_500_26 border-bw022 border-solid font-normal not-italic 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] pl-[8.75px] 2xl:pl-[8px] lg:pr-[19px] xl:pr-[22px] pr-[25.380068000000055px] 2xl:pr-[25px] 3xl:pr-[30px] py-[3.95px] 2xl:py-[3px] xl:py-[3px] lg:py-[3px] 3xl:py-[4px] rounded-radius263 placeholder:text-bluegray_500 text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[100%]"
                                      name="Group73"
                                      placeholder={`Total Earning`}
                                    ></Input>
                                  </div>
                                  <div className="2xl:ml-[8px] 3xl:ml-[10px] bg-transparent border-0 lg:ml-[6px] ml-[8.82px] w-[42%] xl:ml-[7px] input-wrap">
                                    <Image
                                      src={"images/img_vector_1.svg"}
                                      className="absolute right-[10.070068px] bg-transparent border-0 lg:right-[7px] xl:right-[8px] 2xl:right-[10px] 3xl:right-[12px] my-[auto] inset-y-[0]"
                                      alt="Vector"
                                    />
                                    <Input
                                      className="placeholder:bg-transparent bg-white_A700 border-bluegray_500_26 border-bw022 border-solid font-normal not-italic 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] pl-[8.75px] 2xl:pl-[8px] lg:pr-[19px] xl:pr-[22px] pr-[25.380068000000055px] 2xl:pr-[25px] 3xl:pr-[30px] py-[3.95px] 2xl:py-[3px] xl:py-[3px] lg:py-[3px] 3xl:py-[4px] rounded-radius263 placeholder:text-bluegray_500 text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[100%]"
                                      name="Group74"
                                      placeholder={`Monthly`}
                                    ></Input>
                                  </div>
                                </Row>
                              </Stack>
                              <Column className="absolute items-start justify-start right-[39%] top-[28%] w-[11%]">
                                <Column className="items-start pr-[3.93px] 2xl:pr-[3px] xl:pr-[3px] lg:pr-[3px] 3xl:pr-[4px] w-[100%]">
                                  <Stack className="lg:h-[14px] xl:h-[16px] h-[17.060059px] 2xl:h-[18px] 3xl:h-[21px] w-[90%]">
                                    <Image
                                      src={"images/img_rectangle909.svg"}
                                      className="absolute lg:h-[14px] xl:h-[16px] h-[17.06px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] object-cover rounded-radius131 w-[100%]"
                                      alt="Rectangle909"
                                    />
                                    <Column className="absolute items-start justify-start left-[10%] top-[13%] w-[63%]">
                                      <Text className="font-bold opacity-op8 xl:text-fs1 lg:text-fs1 3xl:text-fs2 2xl:text-fs2 text-fs2187500238418579 text-left text-white_A700 w-[auto]">{`18 June 2022`}</Text>
                                      <Text className="font-bold mt-[1px] xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left text-white_A700 w-[auto]">{`$ 78,560`}</Text>
                                    </Column>
                                  </Stack>
                                </Column>
                                <Image
                                  src={"images/img_group6356077.svg"}
                                  className="3xl:h-[11px] lg:h-[7px] h-[8.75px] xl:h-[8px] 2xl:h-[9px] lg:ml-[23px] xl:ml-[26px] ml-[30.18px] 2xl:ml-[30px] 3xl:ml-[36px] object-contain 3xl:w-[10px] lg:w-[6px] xl:w-[7px] w-[8.75px] 2xl:w-[8px]"
                                  alt="Group6356077"
                                />
                              </Column>
                            </Stack>
                          </Row>
                          <Line className="bg-bluegray_500 h-[0.22px] mb-[0] mx-[auto] w-[87%]" />
                        </Column>
                        <Column className="items-end lg:mt-[4px] xl:mt-[5px] mt-[6.34px] 2xl:mt-[6px] 3xl:mt-[7px] lg:pl-[31px] xl:pl-[35px] pl-[40.25px] 2xl:pl-[40px] 3xl:pl-[48px] lg:pr-[14px] xl:pr-[17px] pr-[19.25px] 2xl:pr-[19px] 3xl:pr-[23px] w-[100%]">
                          <Row className="items-center justify-end w-[85%]">
                            <Text className="font-bold text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`12`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`13`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`14`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`15`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`16`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`17`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`18`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`19`}</Text>
                            <Text className="font-bold lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`20`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`21`}</Text>
                            <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`22`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Text className="font-bold lg:mt-[17px] xl:mt-[19px] mt-[22.12px] 2xl:mt-[22px] 3xl:mt-[26px] text-black_900 2xl:text-fs10 text-fs10500000953674316 3xl:text-fs12 lg:text-fs8 xl:text-fs9 text-left tracking-ls11 w-[auto]">{`Activity Summary`}</Text>
                    <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8.31px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Column className="bg-white_A700 border-bluegray_500_26 border-bw044 border-solid items-start justify-end lg:pb-[3px] xl:pb-[4px] pb-[5.13px] 2xl:pb-[5px] 3xl:pb-[6px] lg:pt-[10px] xl:pt-[11px] pt-[13.13px] 2xl:pt-[13px] 3xl:pt-[15px] rounded-radius525 shadow-bs2 w-[100%]">
                        <Row className="items-start justify-end lg:pl-[17px] xl:pl-[20px] pl-[22.75px] 2xl:pl-[22px] 3xl:pl-[27px] lg:pr-[15px] xl:pr-[17px] pr-[19.32px] 2xl:pr-[19px] 3xl:pr-[23px] w-[100%]">
                          <Text className="font-bold lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-indigo_600 text-left w-[auto]">{`History`}</Text>
                          <Text className="font-normal lg:ml-[16px] xl:ml-[19px] ml-[21.82px] 2xl:ml-[21px] 3xl:ml-[26px] not-italic text-bluegray_500 lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left w-[auto]">{`Upcoming`}</Text>
                          <Text className="font-medium mb-[1px] lg:ml-[185px] xl:ml-[212px] ml-[239.12px] 2xl:ml-[239px] 3xl:ml-[287px] text-bluegray_500 lg:text-fs4 xl:text-fs5 2xl:text-fs6 text-fs6125000476837158 3xl:text-fs7 text-left w-[auto]">{`View More`}</Text>
                          <Image
                            src={"images/img_arrow7.svg"}
                            className="h-[1px] mb-[4.34px] 2xl:mb-[4px] 3xl:mb-[5px] xl:ml-[3px] lg:ml-[3px] ml-[4.37px] 2xl:ml-[4px] 3xl:ml-[5px] mt-[4px] xl:my-[3px] lg:my-[3px] object-contain w-[2%]"
                            alt="Arrow7"
                          />
                        </Row>
                        <Line className="bg-bluegray_500 h-[0.22px] lg:ml-[11px] xl:ml-[13px] ml-[15.32px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.93px] 2xl:mt-[8px] w-[92%]" />
                        <Column className="items-start mt-[1px] lg:pl-[11px] xl:pl-[13px] pl-[15.32px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pr-[270px] xl:pr-[309px] pr-[347.8px] 2xl:pr-[348px] 3xl:pr-[417px] w-[100%]">
                          <Line className="bg-indigo_600 h-[1.31px] ml-[0] w-[10%]" />
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="absolute bg-white_A700 border-bluegray_500_26 border-bw044 border-solid items-start justify-start lg:pb-[13px] xl:pb-[15px] pb-[17.5px] 2xl:pb-[17px] 3xl:pb-[21px] lg:pt-[10px] xl:pt-[11px] pt-[13.12px] 2xl:pt-[13px] 3xl:pt-[15px] right-[1%] rounded-radius525 shadow-bs2 top-[14%] w-[21%]">
                    <Text className="font-bold ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] text-black_900 lg:text-fs6 2xl:text-fs7 xl:text-fs7 text-fs7875000953674316 3xl:text-fs9 text-left w-[auto]">{`My Account Bank`}</Text>
                    <Column className="items-center mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] pl-[10.94px] pr-[10.93px] 2xl:px-[10px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] w-[100%]">
                      <Stack className="lg:h-[53px] xl:h-[60px] h-[67.329834px] 2xl:h-[68px] 3xl:h-[81px] mx-[auto] w-[83%]">
                        <Column className="absolute bg-gradient  bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:pt-[5px] pt-[6.84px] 2xl:pt-[6px] xl:pt-[6px] 3xl:pt-[8px] rounded-radius525 w-[92%]">
                          <Row className="items-center justify-between lg:px-[6px] xl:px-[7px] px-[8.05px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
                            <Text className="font-bold lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left text-white_A700 tracking-ls1 w-[auto]">{`Chase`}</Text>
                            <Stack className="bg-white_A700 3xl:h-[10px] lg:h-[7px] h-[8.16px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:ml-[29px] xl:ml-[33px] ml-[37.43px] 2xl:ml-[37px] 3xl:ml-[44px] pl-[5.41px] pr-[5.4px] xl:px-[4px] lg:px-[4px] 2xl:px-[5px] 3xl:px-[6px] lg:py-[1px] py-[2.27px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] rounded-radius088 w-[26%]">
                              <Image
                                src={"images/img_image7.png"}
                                className="absolute h-[3.62px] lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[59%]"
                                alt="image7"
                              />
                            </Stack>
                          </Row>
                          <Stack className="lg:h-[25px] xl:h-[28px] h-[31.400024px] 2xl:h-[32px] 3xl:h-[38px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.26px] 2xl:mt-[9px] w-[100%]">
                            <Image
                              src={"images/img_vector_2.png"}
                              className="absolute lg:h-[25px] xl:h-[28px] h-[31.4px] 2xl:h-[32px] 3xl:h-[38px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                              alt="Vector"
                            />
                            <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[19%] w-[84%]">
                              <Column className="items-start w-[26%]">
                                <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Transaction`}</Text>
                                <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`73`}</Text>
                              </Column>
                              <Column className="items-start lg:ml-[24px] xl:ml-[27px] ml-[31.4px] 2xl:ml-[31px] 3xl:ml-[37px] w-[37%]">
                                <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Total Balance:`}</Text>
                                <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`$74,330`}</Text>
                              </Column>
                            </Row>
                          </Stack>
                        </Column>
                        <Stack className="absolute lg:h-[50px] xl:h-[57px] h-[64.07px] 2xl:h-[65px] 3xl:h-[77px] inset-x-[0] top-[0] w-[100%]">
                          <Column className="absolute bg-gradient1  bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:pt-[5px] xl:pt-[6px] pt-[7.14px] 2xl:pt-[7px] 3xl:pt-[8px] rounded-radius525 w-[96%]">
                            <Row className="items-center justify-between pl-[8.41px] pr-[8.4px] 3xl:px-[10px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] w-[100%]">
                              <Text className="font-bold lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left text-white_A700 tracking-ls1 w-[auto]">{`Chase`}</Text>
                              <Stack className="bg-white_A700 3xl:h-[11px] lg:h-[7px] h-[8.52px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:ml-[30px] xl:ml-[34px] ml-[39.05px] 2xl:ml-[39px] 3xl:ml-[46px] pl-[5.99px] pr-[5.98px] lg:px-[4px] 2xl:px-[5px] xl:px-[5px] 3xl:px-[7px] lg:py-[1px] py-[2.45px] 3xl:py-[2px] 2xl:py-[2px] xl:py-[2px] rounded-radius088 w-[26%]">
                                <Image
                                  src={"images/img_image7_1.png"}
                                  className="absolute h-[3.62px] lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[57%]"
                                  alt="image7"
                                />
                              </Stack>
                            </Row>
                            <Stack className="lg:h-[26px] xl:h-[30px] h-[32.76001px] 2xl:h-[33px] 3xl:h-[40px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.66px] 2xl:mt-[9px] w-[100%]">
                              <Image
                                src={"images/img_vector_3.png"}
                                className="absolute lg:h-[26px] xl:h-[30px] h-[32.76px] 2xl:h-[33px] 3xl:h-[40px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                                alt="Vector"
                              />
                              <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[19%] w-[84%]">
                                <Column className="items-start w-[26%]">
                                  <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Transaction`}</Text>
                                  <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`73`}</Text>
                                </Column>
                                <Column className="items-start lg:ml-[25px] xl:ml-[29px] ml-[32.75px] 2xl:ml-[32px] 3xl:ml-[39px] w-[37%]">
                                  <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Total Balance:`}</Text>
                                  <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`$74,330`}</Text>
                                </Column>
                              </Row>
                            </Stack>
                          </Column>
                          <Column className="absolute bg-gradient2  items-center justify-start lg:pt-[5px] xl:pt-[6px] pt-[7.44px] 2xl:pt-[7px] 3xl:pt-[8px] rounded-radius525 shadow-bs3 top-[0] w-[100%]">
                            <Row className="items-center justify-between 3xl:px-[10px] lg:px-[6px] xl:px-[7px] px-[8.75px] 2xl:px-[8px] w-[100%]">
                              <Text className="font-bold lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left text-white_A700 tracking-ls1 w-[auto]">{`Chase`}</Text>
                              <Stack className="bg-white_A700 3xl:h-[11px] lg:h-[7px] h-[8.87px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] pb-[2.62px] pl-[6.56px] pr-[6.57px] pt-[2.63px] xl:px-[5px] lg:px-[5px] 2xl:px-[6px] 3xl:px-[7px] 2xl:py-[2px] xl:py-[2px] lg:py-[2px] 3xl:py-[3px] rounded-radius088 w-[26%]">
                                <Image
                                  src={"images/img_image7_2.png"}
                                  className="absolute h-[3.62px] lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[55%]"
                                  alt="image7"
                                />
                              </Stack>
                            </Row>
                            <Stack className="lg:h-[27px] xl:h-[31px] h-[34.119995px] 2xl:h-[35px] 3xl:h-[41px] mb-[0] mt-[10.25px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                              <Image
                                src={"images/img_vector_4.png"}
                                className="absolute lg:h-[27px] xl:h-[31px] h-[34.12px] 2xl:h-[35px] 3xl:h-[41px] inset-[0] justify-center m-[auto] object-contain w-[100%]"
                                alt="Vector"
                              />
                              <Row className="absolute inset-x-[0] items-center justify-between mx-[auto] top-[19%] w-[84%]">
                                <Column className="items-start w-[26%]">
                                  <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Transaction`}</Text>
                                  <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`73`}</Text>
                                </Column>
                                <Column className="items-start lg:ml-[26px] xl:ml-[30px] ml-[33.75px] 2xl:ml-[33px] 3xl:ml-[40px] w-[37%]">
                                  <Text className="font-normal not-italic xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left text-white_A700 w-[auto]">{`Total Balance:`}</Text>
                                  <Text className="font-bold mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 3xl:text-fs10 lg:text-fs6 xl:text-fs7 2xl:text-fs8 text-fs8750000953674316 text-left text-white_A700 w-[auto]">{`$74,330`}</Text>
                                </Column>
                              </Row>
                            </Stack>
                          </Column>
                        </Stack>
                      </Stack>
                      <div className="2xl:mt-[15px] 3xl:mt-[18px] bg-transparent border-0 lg:mt-[12px] mb-[0] mt-[15.8px] w-[56%] xl:mt-[14px] input-wrap">
                        <Image
                          src={"images/img_vector_5.svg"}
                          className="absolute left-[16.190063px] bg-transparent border-0 lg:left-[12px] xl:left-[14px] 2xl:left-[16px] 3xl:left-[19px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Input
                          className="placeholder:bg-transparent bg-white_A700 border-bluegray_500_66 border-bw022 border-solid font-bold lg:pb-[5px] pb-[6.9800005px] xl:pb-[6px] 3xl:pb-[8px] lg:pl-[25px] xl:pl-[29px] pl-[33.26006300000005px] 2xl:pl-[33px] 3xl:pl-[39px] lg:pt-[4px] xl:pt-[5px] pt-[6.1000004px] 3xl:pt-[7px] 2xl:py-[6px] rounded-radius263 placeholder:text-bluegray_500 text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[100%]"
                          name="Group75"
                          placeholder={`Add New Card`}
                        ></Input>
                      </div>
                    </Column>
                  </Column>
                  <Stack className="absolute bottom-[0] lg:h-[151px] xl:h-[172px] h-[193px] 2xl:h-[194px] 3xl:h-[232px] pl-[1px] right-[0] w-[22%]">
                    <div className="absolute bg-white_A700 border-bluegray_500_26 border-bw044 border-solid lg:h-[151px] xl:h-[172px] h-[193px] 2xl:h-[194px] 3xl:h-[232px] left-[0] rounded-radius525 shadow-bs2 w-[95%]"></div>
                    <Stack className="absolute bottom-[1%] lg:h-[141px] xl:h-[161px] h-[180.06px] 2xl:h-[181px] 3xl:h-[217px] right-[0] w-[92%]">
                      <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[87%]">
                        <Text className="font-bold text-black_900 lg:text-fs6 2xl:text-fs7 xl:text-fs7 text-fs7875000953674316 3xl:text-fs9 text-left w-[auto]">{`Target`}</Text>
                        <Column className="items-center mb-[0] lg:mt-[42px] xl:mt-[48px] mt-[54.47px] 2xl:mt-[54px] 3xl:mt-[65px] w-[100%]">
                          <List
                            className="gap-[0] min-h-[auto] w-[100%]"
                            orientation="vertical"
                          >
                            <Column className="hover:border-bluegray_500_26 hover:border-bw022 hover:border-solid hover:cursor-pointer lg:my-[21px] xl:my-[24px] my-[27.109985px] 2xl:my-[27px] 3xl:my-[32px] rounded-radius264 hover:shadow-bs2 shadow-bs4 w-[100%]">
                              <Row className="bg-white_A700 border-bluegray_500_26 border-bw022 border-solid items-start justify-evenly pb-[4.84px] lg:pl-[6px] pl-[7.9px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] xl:pr-[5px] lg:pr-[5px] pr-[6.59px] 2xl:pr-[6px] 3xl:pr-[7px] pt-[4.83px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius264 shadow-bs5 w-[100%]">
                                <Column className="bg-gradient3  lg:h-[17px] xl:h-[19px] h-[21.08px] 2xl:h-[22px] 3xl:h-[26px] my-[0] rounded-radius50 lg:w-[16px] xl:w-[18px] w-[21.08px] 2xl:w-[21px] 3xl:w-[25px]">
                                  <Column className="bg-gradient4  lg:h-[17px] xl:h-[19px] h-[21.08px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-start pb-[7.61px] 3xl:pb-[9px] lg:pl-[4px] pl-[5.71px] 2xl:pl-[5px] xl:pl-[5px] 3xl:pl-[6px] xl:pr-[3px] lg:pr-[3px] pr-[4.37px] 2xl:pr-[4px] 3xl:pr-[5px] pt-[7.47px] 3xl:pt-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] rounded-radius50 w-[100%]">
                                    <Text className="font-bold text-black_900 xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4392500400543213 3xl:text-fs5 text-left tracking-ls11 w-[auto]">{`70 %`}</Text>
                                  </Column>
                                </Column>
                                <Column className="items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3.22px] 3xl:mb-[3px] 2xl:mb-[3px] lg:ml-[5px] xl:ml-[6px] ml-[7.04px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1.76px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] w-[36%]">
                                  <Text className="capitalize font-bold text-black_900 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5271000385284424 3xl:text-fs6 text-left w-[auto]">{`property rental`}</Text>
                                  <Text className="font-bold xl:mt-[2px] lg:mt-[2px] mt-[3.1px] 3xl:mt-[3px] 2xl:mt-[3px] text-bluegray_500 xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4392500400543213 3xl:text-fs5 text-left w-[auto]">{`3 month later`}</Text>
                                </Column>
                                <Image
                                  src={"images/img_chevrondown.svg"}
                                  className="h-[10.54px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] lg:ml-[12px] xl:ml-[14px] ml-[16.66px] 2xl:ml-[16px] 3xl:ml-[20px] xl:my-[4px] lg:my-[4px] my-[5.27px] 2xl:my-[5px] 3xl:my-[6px] object-contain w-[10.54px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                                  alt="chevrondown"
                                />
                              </Row>
                            </Column>
                            <Row className="hover:border-bluegray_500_26 hover:border-bw022 hover:border-solid hover:cursor-pointer items-start justify-end lg:my-[21px] xl:my-[24px] my-[27.109985px] 2xl:my-[27px] 3xl:my-[32px] lg:pl-[6px] pl-[7.87px] 2xl:pl-[7px] xl:pl-[7px] 3xl:pl-[9px] xl:pr-[5px] lg:pr-[5px] pr-[6.57px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[3px] py-[4.81px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] hover:shadow-bs2 shadow-bs4 w-[100%]">
                              <Column className="bg-gradient5  lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] my-[0] rounded-radius50 lg:w-[16px] xl:w-[18px] w-[21px] 3xl:w-[25px]">
                                <Column className="bg-gradient6  lg:h-[17px] xl:h-[19px] h-[21px] 2xl:h-[22px] 3xl:h-[26px] items-center justify-start pb-[7.56px] 3xl:pb-[9px] pl-[5.69px] xl:pl-[5px] xl:pr-[4px] pr-[5.31px] pt-[7.44px] 3xl:pt-[8px] lg:px-[4px] 2xl:px-[5px] 3xl:px-[6px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] rounded-radius50 w-[100%]">
                                  <Text className="font-bold mx-[auto] text-black_900 xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left tracking-ls11 w-[auto]">{`10 %`}</Text>
                                </Column>
                              </Column>
                              <Column className="items-start justify-start xl:mb-[2px] lg:mb-[2px] mb-[3.18px] 3xl:mb-[3px] 2xl:mb-[3px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] mt-[1.75px] 2xl:mt-[1px] xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] w-[27%]">
                                <Text className="capitalize font-bold text-black_900 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">{`Service`}</Text>
                                <Text className="font-bold xl:mt-[2px] lg:mt-[2px] mt-[3.07px] 3xl:mt-[3px] 2xl:mt-[3px] text-bluegray_500 xl:text-fs3 lg:text-fs3 2xl:text-fs4 text-fs4375000476837158 3xl:text-fs5 text-left w-[auto]">{`4 month later`}</Text>
                              </Column>
                              <Image
                                src={"images/img_chevrondown_1.svg"}
                                className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] lg:ml-[21px] xl:ml-[24px] ml-[27.44px] 2xl:ml-[27px] 3xl:ml-[32px] xl:my-[4px] lg:my-[4px] my-[5.25px] 2xl:my-[5px] 3xl:my-[6px] object-contain w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                                alt="chevrondown"
                              />
                            </Row>
                          </List>
                        </Column>
                      </Column>
                      <Column className="absolute rounded-radius304 shadow-bs6 top-[10%] w-[100%]">
                        <Row className="bg-white_A700 border-bluegray_500_26 border-bw025 border-solid items-start justify-evenly pb-[5.59px] 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9.13px] 2xl:pl-[9px] lg:pr-[5px] xl:pr-[6px] pr-[7.61px] 2xl:pr-[7px] 3xl:pr-[9px] pt-[5.57px] xl:py-[4px] lg:py-[4px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius304 shadow-bs7 w-[100%]">
                          <Column className="bg-gradient5  lg:h-[19px] xl:h-[22px] h-[24.35px] 2xl:h-[25px] 3xl:h-[30px] my-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24.35px] 2xl:w-[24px] 3xl:w-[29px]">
                            <Column className="bg-gradient6  lg:h-[19px] xl:h-[22px] h-[24.35px] 2xl:h-[25px] 3xl:h-[30px] items-center justify-start pb-[8.72px] xl:pl-[5px] lg:pl-[5px] pl-[6.59px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[3px] pr-[4.76px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] pt-[8.63px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] rounded-radius50 w-[100%]">
                              <Text className="font-bold text-black_900 lg:text-fs3 xl:text-fs4 2xl:text-fs5 text-fs5072500705718994 3xl:text-fs6 text-left tracking-ls11 w-[auto]">{`60 %`}</Text>
                            </Column>
                          </Column>
                          <Column className="items-start justify-start lg:mb-[2px] mb-[3.65px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] lg:ml-[6px] xl:ml-[7px] ml-[8.11px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2.03px] 3xl:mt-[2px] 2xl:mt-[2px] w-[33%]">
                            <Text className="capitalize font-bold text-black_900 lg:text-fs4 xl:text-fs5 2xl:text-fs6 text-fs6087000846862793 3xl:text-fs7 text-left w-[auto]">{`Sale of goods`}</Text>
                            <Text className="font-bold lg:mt-[2px] mt-[3.67px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] text-bluegray_500 lg:text-fs3 xl:text-fs4 2xl:text-fs5 text-fs5072500705718994 3xl:text-fs6 text-left w-[auto]">{`1 month later`}</Text>
                          </Column>
                          <Image
                            src={"images/img_chevrondown_2.svg"}
                            className="lg:h-[10px] xl:h-[11px] h-[12.17px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[18px] xl:ml-[20px] ml-[23.44px] 2xl:ml-[23px] 3xl:ml-[28px] lg:my-[4px] xl:my-[5px] my-[6.09px] 2xl:my-[6px] 3xl:my-[7px] object-contain xl:w-[10px] w-[12.17px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                            alt="chevrondown"
                          />
                        </Row>
                      </Column>
                    </Stack>
                  </Stack>
                </Stack>
                <Row className="absolute items-center justify-between right-[1%] top-[5%] w-[13%]">
                  <Image
                    src={"images/img_bell.svg"}
                    className="lg:h-[10px] xl:h-[11px] h-[12.25px] 2xl:h-[13px] 3xl:h-[15px] my-[1.75px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain xl:w-[10px] w-[12.25px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                    alt="bell"
                  />
                  <Image
                    src={"images/img_messagecircle.svg"}
                    className="lg:h-[10px] xl:h-[11px] h-[12.25px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] my-[1.75px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] 3xl:my-[2px] object-contain xl:w-[10px] w-[12.25px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                    alt="messagecircle"
                  />
                  <Image
                    src={"images/img_image17.png"}
                    className="lg:h-[13px] h-[15.75px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] object-contain rounded-radius50 w-[auto]"
                    alt="image17"
                  />
                  <Image
                    src={"images/img_chevrondown_3.svg"}
                    className="h-[10.5px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] mb-[2.63px] xl:ml-[1px] lg:ml-[1px] ml-[2.19px] 3xl:ml-[2px] 2xl:ml-[2px] mt-[2.62px] 2xl:my-[2px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] object-contain w-[10.5px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                    alt="chevrondown"
                  />
                </Row>
                <Column className="absolute bottom-[9%] right-[0] rounded-radius304 shadow-bs6 w-[20%]">
                  <Row className="bg-white_A700 border-bluegray_500_26 border-bw025 border-solid items-start justify-evenly 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9.13px] 2xl:pl-[9px] lg:pr-[5px] xl:pr-[6px] pr-[7.61px] 2xl:pr-[7px] 3xl:pr-[9px] xl:py-[4px] lg:py-[4px] py-[5.58px] 2xl:py-[5px] 3xl:py-[6px] rounded-radius304 shadow-bs7 w-[100%]">
                    <Column className="bg-gradient7  lg:h-[19px] xl:h-[22px] h-[24.35px] 2xl:h-[25px] 3xl:h-[30px] my-[0] rounded-radius50 lg:w-[18px] xl:w-[21px] w-[24.35px] 2xl:w-[24px] 3xl:w-[29px]">
                      <Column className="bg-gradient8  lg:h-[19px] xl:h-[22px] h-[24.35px] 2xl:h-[25px] 3xl:h-[30px] items-center justify-start pb-[8.73px] lg:pl-[5px] pl-[6.59px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[4px] pr-[5.76px] 2xl:pr-[5px] 3xl:pr-[6px] pt-[8.62px] xl:px-[5px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] rounded-radius50 w-[100%]">
                        <Text className="font-bold mx-[auto] text-black_900 lg:text-fs3 xl:text-fs4 2xl:text-fs5 text-fs5072500705718994 3xl:text-fs6 text-left tracking-ls11 w-[auto]">{`43 %`}</Text>
                      </Column>
                    </Column>
                    <Column className="items-start justify-start lg:mb-[2px] mb-[3.65px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] lg:ml-[6px] xl:ml-[7px] ml-[8.11px] 2xl:ml-[8px] 3xl:ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2.03px] 3xl:mt-[2px] 2xl:mt-[2px] w-[37%]">
                      <Text className="capitalize font-bold text-black_900 lg:text-fs4 xl:text-fs5 2xl:text-fs6 text-fs6087000846862793 3xl:text-fs7 text-left w-[auto]">{`design services`}</Text>
                      <Text className="font-bold mb-[0] lg:mt-[2px] mt-[3.67px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] text-bluegray_500 lg:text-fs3 xl:text-fs4 2xl:text-fs5 text-fs5072500705718994 3xl:text-fs6 text-left w-[auto]">{`1 month later`}</Text>
                    </Column>
                    <Image
                      src={"images/img_chevrondown_4.svg"}
                      className="lg:h-[10px] xl:h-[11px] h-[12.17px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[14px] xl:ml-[16px] ml-[18.44px] 2xl:ml-[18px] 3xl:ml-[22px] lg:my-[4px] xl:my-[5px] my-[6.09px] 2xl:my-[6px] 3xl:my-[7px] object-contain xl:w-[10px] w-[12.17px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                      alt="chevrondown"
                    />
                  </Row>
                </Column>
              </Stack>
              <Row className="absolute items-start justify-start left-[10%] top-[14%] w-[65%]">
                <Column className="items-start justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] mt-[8.75px] 2xl:mt-[8px] w-[20%]">
                  <Text className="font-normal ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left text-white_A700 tracking-ls11 w-[auto]">{`Total Earning`}</Text>
                  <Text className="font-bold ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] xl:text-fs10 2xl:text-fs12 text-fs12250000953674316 3xl:text-fs14 lg:text-fs9 text-left text-white_A700 w-[auto]">{`$ 120,000`}</Text>
                  <Column className="xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                    <Row className="items-center justify-between pl-[10.94px] 2xl:pl-[10px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] w-[100%]">
                      <Text className="font-normal not-italic xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left text-white_A700 w-[auto]">
                        <span className="text-white_A700 text-fs525 font-dmsans font-bold lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                          <>{`12%`}</>
                        </span>
                        <span className="text-white_A700 text-fs525 font-dmsans lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                          <>{` `}</>
                        </span>
                        <span className="text-white_A700_99 text-fs4375000476837158 font-dmsans lg:text-fs3 xl:text-fs3 2xl:text-fs4 3xl:text-fs5">
                          <>{`Increase From Target`}</>
                        </span>
                      </Text>
                      <Image
                        src={"images/img_arrow3.svg"}
                        className="h-[4.38px] xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[11px] xl:ml-[13px] ml-[14.81px] 2xl:ml-[14px] 3xl:ml-[17px] my-[1px] object-contain w-[1%]"
                        alt="Arrow3"
                      />
                    </Row>
                  </Column>
                  <Text className="font-bold lg:mt-[23px] xl:mt-[26px] mt-[29.75px] 2xl:mt-[29px] 3xl:mt-[35px] text-black_900 2xl:text-fs10 text-fs10500000953674316 3xl:text-fs12 lg:text-fs8 xl:text-fs9 text-left tracking-ls11 w-[auto]">{`Analitcs Report`}</Text>
                </Column>
                <List
                  className="3xl:gap-[10px] lg:gap-[6px] xl:gap-[7px] gap-[8.76001px] 2xl:gap-[8px] grid grid-cols-3 lg:mb-[24px] xl:mb-[28px] mb-[31.5px] 2xl:mb-[31px] 3xl:mb-[37px] min-h-[auto] lg:ml-[18px] xl:ml-[21px] ml-[23.62px] 2xl:ml-[23px] 3xl:ml-[28px] w-[74%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 items-start justify-start xl:pb-[10px] pb-[12.25px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] pt-[8.75px] 2xl:pt-[8px] rounded-radius525 shadow-bs2 w-[100%]">
                    <Text className="font-normal ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic text-bluegray_500 lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left tracking-ls11 w-[auto]">{`Invoices`}</Text>
                    <Text className="font-bold xl:ml-[10px] ml-[12.25px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_500 xl:text-fs10 2xl:text-fs12 text-fs12250000953674316 3xl:text-fs14 lg:text-fs9 text-left w-[auto]">{`$ 16,500`}</Text>
                    <Column className="xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly xl:pl-[10px] pl-[12.25px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[11px] xl:pr-[13px] pr-[14.87px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                        <Text className="font-normal not-italic text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">
                          <span className="text-bluegray_500 text-fs525 font-dmsans font-bold lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{`2%`}</>
                          </span>
                          <span className="text-bluegray_500 text-fs525 font-dmsans lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{` `}</>
                          </span>
                          <span className="text-bluegray_500_99 text-fs4375000476837158 font-dmsans lg:text-fs3 xl:text-fs3 2xl:text-fs4 3xl:text-fs5">
                            <>{`Decrease From Target`}</>
                          </span>
                        </Text>
                        <Image
                          src={"images/img_arrow4.svg"}
                          className="h-[4.38px] xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] xl:ml-[11px] ml-[12.5px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] my-[1px] object-contain w-[0]"
                          alt="Arrow4"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-start justify-start xl:pb-[10px] pb-[12.25px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] pt-[8.75px] 2xl:pt-[8px] rounded-radius525 shadow-bs2 w-[100%]">
                    <Text className="font-normal ml-[10.93px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic text-bluegray_500 lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left tracking-ls11 w-[auto]">{`Total Spending`}</Text>
                    <Text className="font-bold ml-[10.93px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_500 xl:text-fs10 2xl:text-fs12 text-fs12250000953674316 3xl:text-fs14 lg:text-fs9 text-left w-[auto]">{`$ 48,670`}</Text>
                    <Column className="xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-evenly pl-[10.93px] 2xl:pl-[10px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] lg:pr-[11px] xl:pr-[13px] pr-[14.87px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                        <Text className="font-normal not-italic text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">
                          <span className="text-bluegray_500 text-fs525 font-dmsans font-bold lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{`6%`}</>
                          </span>
                          <span className="text-bluegray_500 text-fs525 font-dmsans lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{` `}</>
                          </span>
                          <span className="text-bluegray_500_99 text-fs4375000476837158 font-dmsans lg:text-fs3 xl:text-fs3 2xl:text-fs4 3xl:text-fs5">
                            <>{`Increase From Target`}</>
                          </span>
                        </Text>
                        <Image
                          src={"images/img_arrow5.svg"}
                          className="h-[4.38px] xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[12px] xl:ml-[14px] ml-[15.82px] 2xl:ml-[15px] 3xl:ml-[18px] my-[1px] object-contain w-[0]"
                          alt="Arrow5"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-start justify-start xl:pb-[10px] pb-[12.25px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] pt-[8.75px] 2xl:pt-[8px] rounded-radius525 shadow-bs2 w-[100%]">
                    <Text className="font-normal ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic text-bluegray_500 lg:text-fs5 xl:text-fs6 2xl:text-fs7 text-fs7000000953674316 3xl:text-fs8 text-left tracking-ls11 w-[auto]">{`Balance`}</Text>
                    <Text className="font-bold ml-[10.94px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_500 xl:text-fs10 2xl:text-fs12 text-fs12250000953674316 3xl:text-fs14 lg:text-fs9 text-left w-[auto]">{`$ 74,330`}</Text>
                    <Column className="items-center xl:mt-[6px] lg:mt-[6px] mt-[7.81px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Row className="items-center justify-between pl-[10.94px] 2xl:pl-[10px] 3xl:pl-[13px] lg:pl-[8px] xl:pl-[9px] lg:pr-[11px] xl:pr-[13px] pr-[14.87px] 2xl:pr-[14px] 3xl:pr-[17px] w-[100%]">
                        <Text className="font-normal not-italic text-bluegray_500 xl:text-fs4 lg:text-fs4 2xl:text-fs5 text-fs5250000476837158 3xl:text-fs6 text-left w-[auto]">
                          <span className="text-bluegray_500 text-fs525 font-dmsans font-bold lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{`1%`}</>
                          </span>
                          <span className="text-bluegray_500 text-fs525 font-dmsans lg:text-fs4 xl:text-fs4 2xl:text-fs5 3xl:text-fs6">
                            <>{` `}</>
                          </span>
                          <span className="text-bluegray_500_99 text-fs4375000476837158 font-dmsans lg:text-fs3 xl:text-fs3 2xl:text-fs4 3xl:text-fs5">
                            <>{`Increase From Target`}</>
                          </span>
                        </Text>
                        <Image
                          src={"images/img_arrow6.svg"}
                          className="h-[4.38px] xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[13px] xl:ml-[15px] ml-[17.81px] 2xl:ml-[17px] 3xl:ml-[21px] my-[1px] object-contain w-[0]"
                          alt="Arrow6"
                        />
                      </Row>
                    </Column>
                  </Column>
                </List>
              </Row>
            </Stack>
          </Column>
        </Row>
        <footer className="w-[100%]">
          <Row className="items-start justify-between lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] xl:ml-[107px] ml-[121px] 3xl:ml-[145px] lg:ml-[94px] lg:mr-[102px] xl:mr-[117px] mr-[132px] 3xl:mr-[158px] lg:mt-[61px] xl:mt-[70px] mt-[79px] 3xl:mt-[94px] w-[82%]">
            <Column className="items-start justify-start lg:mb-[113px] xl:mb-[129px] mb-[146px] 3xl:mb-[175px] w-[20%]">
              <Row className="items-center justify-start w-[71%]">
                <Image
                  src={"images/img_logo_5.png"}
                  className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] object-contain w-[22%]"
                  alt="Logo"
                />
                <Text className="font-semibold ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:my-[5px] xl:my-[6px] my-[7.5px] 2xl:my-[7px] 3xl:my-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_900 text-left tracking-ls1 w-[auto]">{`GroundDesk`}</Text>
              </Row>
              <Text className="font-normal lg:leading-lh24 xl:leading-lh28 2xl:leading-lh32 leading-lh3200 3xl:leading-lh38 lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] not-italic text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left tracking-ls1 w-[100%]">{`Manage file easily. Everywhere, everytime.`}</Text>
            </Column>
            <Column className="items-start justify-start lg:ml-[172px] xl:ml-[197px] ml-[222px] 3xl:ml-[266px] w-[61%]">
              <Column className="w-[100%]">
                <Row className="items-center justify-end lg:pl-[135px] xl:pl-[154px] pl-[174px] 3xl:pl-[208px] w-[100%]">
                  <Column className="items-start mb-[1px] w-[12%]">
                    <Text className="font-bold font-manrope text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Company`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`About Us`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Product`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Testimonial`}</Text>
                  </Column>
                  <Column className="items-start xl:ml-[105px] ml-[119px] 3xl:ml-[142px] lg:ml-[92px] mt-[1px] w-[19%]">
                    <Text className="font-bold font-manrope text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Support`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`FAQ`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Privacy Policy`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Terms of Services`}</Text>
                  </Column>
                  <Column className="items-start xl:ml-[105px] ml-[119px] 3xl:ml-[142px] lg:ml-[92px] mt-[1px] w-[12%]">
                    <Text className="font-bold font-manrope text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left w-[auto]">{`Our Works`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Pricing`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Customer`}</Text>
                    <Text className="font-bevietnampro font-normal lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] not-italic opacity-op8 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left w-[auto]">{`Product`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="font-normal 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] mt-[86px] not-italic opacity-op6 text-bluegray_900 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[auto]">{`©2022 GrounDesk. All right reserved`}</Text>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default LandingPagePage;
