import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";

const CustomerPage = () => {
  const navigate = useNavigate();

  const handleNavigate5 = () => navigate("/");
  const handleNavigate6 = () => navigate("/");
  const handleNavigate8 = () => navigate("/solution");
  const handleNavigate7 = () => navigate("/pricing");

  return (
    <>
      <Column className="bg-white_A700 font-bevietnampro items-start justify-start mx-[auto] lg:pb-[252px] xl:pb-[288px] pb-[324px] 3xl:pb-[389px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-indigo_900 items-center justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[28px] xl:pl-[32px] pl-[36px] 3xl:pl-[43px] 3xl:pr-[100px] lg:pr-[65px] xl:pr-[74px] pr-[84px] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] w-[100%]">
            <Image
              src={"images/img_logo_1.png"}
              className="common-pointer lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[3%]"
              onClick={handleNavigate5}
              alt="Logo"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-semibold font-semibold lg:mb-[12px] xl:mb-[13px] mb-[15.5px] 2xl:mb-[15px] 3xl:mb-[18px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.5px] 2xl:mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[auto]"
              onClick={handleNavigate6}
            >{`GroundDesk`}</Text>
            <Row className="items-center justify-center xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[183px] xl:ml-[209px] ml-[235.66px] 2xl:ml-[235px] 3xl:ml-[282px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[20%]">
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate8}
              >{`Solution`}</Text>
              <Text className="cursor-pointer font-extrabold hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Customer`}</Text>
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate7}
              >{`Pricing`}</Text>
            </Row>
            <Button className="border border-solid border-white_A700 font-normal lg:ml-[236px] xl:ml-[270px] ml-[304px] 3xl:ml-[365px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[9%]">{`Login`}</Button>
            <Button className="bg-white_A700 font-normal lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center text-deep_purple_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[10%]">{`Sign up`}</Button>
          </Row>
        </header>
        <Column className="items-start mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] xl:pl-[106px] pl-[120px] 3xl:pl-[144px] lg:pl-[93px] lg:pr-[566px] xl:pr-[647px] pr-[728px] 3xl:pr-[874px] w-[100%]">
          <Text className="font-bold lg:leading-lh63 xl:leading-lh72 2xl:leading-lh81 leading-lh8100 3xl:leading-lh97 lg:text-fs31 xl:text-fs35 text-fs40 3xl:text-fs48 text-gray_900 text-left tracking-ls1">{`GroundDesk is loved by users`}</Text>
        </Column>
        <List
          className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] xl:ml-[106px] ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[83%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-center lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius20 w-[100%]">
            <Column className="w-[100%]">
              <Row className="items-center justify-start lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[105px] xl:pr-[120px] pr-[136px] 3xl:pr-[163px] w-[100%]">
                <Image
                  src={"images/img_mask.png"}
                  className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] object-contain rounded-radius50 w-[auto]"
                  alt="Mask"
                />
                <Column className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[32%]">
                  <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left tracking-ls11 w-[auto]">{`Briana Patton`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[auto]">{`Manager`}</Text>
                </Column>
              </Row>
            </Column>
            <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[83%]">{`Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.`}</Text>
            <Column className="lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Row className="xl:gap-[1px] lg:gap-[1px] gap-[2px] grid-cols-5 items-center justify-start ml-6">
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_1.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_2.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_3.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_4.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-start lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius20 w-[100%]">
            <Column className="w-[100%]">
              <Row className="items-center justify-start lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[103px] xl:pr-[118px] pr-[133px] 3xl:pr-[159px] w-[100%]">
                <Image
                  src={"images/img_mask_1.png"}
                  className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] object-contain rounded-radius50 w-[auto]"
                  alt="Mask"
                />
                <Column className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[33%]">
                  <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left tracking-ls11 w-[auto]">{`Imelda Cowen`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[auto]">{`Consultant`}</Text>
                </Column>
              </Row>
            </Column>
            <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[83%]">{`Sapien praesent tristique iaculis amet sit odio pellentesque. Sit nulla pretium amet, fames aenean. Nascetur augue vulputate sed pretium pretium. Scelerisque amet facilisis ut pulvinar morbi a egestas. Vel vulputate dolor nisl in non. Amet enim ultricies imperdiet ac.`}</Text>
            <Column className="lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
              <Row className="xl:gap-[1px] lg:gap-[1px] gap-[2px] grid-cols-5 items-center justify-start ml-6">
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_5.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_6.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_7.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_8.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_9.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-start lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius20 w-[100%]">
            <Column className="w-[100%]">
              <Row className="items-center justify-start lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[105px] xl:pr-[120px] pr-[136px] 3xl:pr-[163px] w-[100%]">
                <Image
                  src={"images/img_mask_2.png"}
                  className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] object-contain rounded-radius50 w-[auto]"
                  alt="Mask"
                />
                <Column className="items-start lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[32%]">
                  <Text className="font-semibold text-bluegray_900 lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left tracking-ls11 w-[auto]">{`Alfred Walton`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[auto]">{`Manager`}</Text>
                </Column>
              </Row>
            </Column>
            <Text className="font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 leading-lh2400 3xl:leading-lh28 lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-ls11 w-[83%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra bibendum feugiat diam egestas ornare quisque tincidunt. Ipsum tortor, pretium lectus urna felis condimentum cursus at. Platea a, pulvinar lacinia id. Augue tortor nunc, ultrices nam in augue a.`}</Text>
            <Column className="lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
              <Row className="xl:gap-[1px] lg:gap-[1px] gap-[2px] grid-cols-5 items-center justify-start ml-6">
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_10.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_11.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_12.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_13.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
                <Column className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] items-center xl:pt-[1px] lg:pt-[1px] pt-[2px] px-[1px] rounded-radius20 lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]">
                  <Image
                    src={"images/img_star1_14.svg"}
                    className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] mx-[auto] object-contain rounded-radius05 lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                    alt="Star1"
                  />
                </Column>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default CustomerPage;
