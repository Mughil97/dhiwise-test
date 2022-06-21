import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";

const PricingPage = () => {
  const navigate = useNavigate();

  const handleNavigate9 = () => navigate("/");
  const handleNavigate10 = () => navigate("/");
  const handleNavigate12 = () => navigate("/solution");
  const handleNavigate11 = () => navigate("/customer");

  return (
    <>
      <Column className="bg-white_A700 font-bevietnampro items-center justify-start mx-[auto] lg:pb-[17px] xl:pb-[19px] pb-[22.18px] 2xl:pb-[22px] 3xl:pb-[26px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-indigo_900 items-center justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[28px] xl:pl-[32px] pl-[36px] 3xl:pl-[43px] 3xl:pr-[100px] lg:pr-[65px] xl:pr-[74px] pr-[84px] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] w-[100%]">
            <Image
              src={"images/img_logo.png"}
              className="common-pointer lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[3%]"
              onClick={handleNavigate9}
              alt="Logo"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-semibold font-semibold lg:mb-[12px] xl:mb-[13px] mb-[15.5px] 2xl:mb-[15px] 3xl:mb-[18px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.5px] 2xl:mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[auto]"
              onClick={handleNavigate10}
            >{`GroundDesk`}</Text>
            <Row className="items-center justify-center xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[183px] xl:ml-[209px] ml-[235.66px] 2xl:ml-[235px] 3xl:ml-[282px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[20%]">
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate12}
              >{`Solution`}</Text>
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate11}
              >{`Customer`}</Text>
              <Text className="cursor-pointer font-extrabold hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Pricing`}</Text>
            </Row>
            <Button className="border border-solid border-white_A700 font-normal lg:ml-[235px] xl:ml-[269px] ml-[303px] 3xl:ml-[363px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[9%]">{`Login`}</Button>
            <Button className="bg-white_A700 font-normal lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center text-deep_purple_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[10%]">{`Sign up`}</Button>
          </Row>
        </header>
        <Text className="font-bold lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 2xl:text-fs48 text-fs4814332580566406 3xl:text-fs57 text-gray_900 tracking-ls1 w-[auto]">{`Our pricing`}</Text>
        <Text className="font-normal lg:mt-[27px] xl:mt-[31px] mt-[35.6px] 2xl:mt-[35px] 3xl:mt-[42px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_500 tracking-normal w-[auto]">{`Pay securely online and manage the booking via desktop or via the mobile app.`}</Text>
        <Row className="items-center justify-center lg:mt-[30px] xl:mt-[34px] mt-[39.25px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pl-[463px] xl:pl-[529px] pl-[595.51px] 2xl:pl-[595px] 3xl:pl-[715px] lg:pr-[461px] xl:pr-[528px] pr-[593.59px] 2xl:pr-[594px] 3xl:pr-[712px] w-[100%]">
          <Text className="font-medium mb-[10.96px] mt-[10.95px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] text-bluegray_900 lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-left tracking-ls11 w-[auto]">{`Monthly`}</Text>
          <Column className="bg-gray_100 items-center lg:ml-[17px] xl:ml-[19px] ml-[22.22px] 2xl:ml-[22px] 3xl:ml-[26px] pb-[7.31px] lg:pl-[5px] xl:pl-[6px] pl-[7.4px] 2xl:pl-[7px] 3xl:pl-[8px] lg:pr-[43px] xl:pr-[49px] pr-[55.55px] 2xl:pr-[55px] 3xl:pr-[66px] pt-[7.3px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius4444 w-[6%]">
            <div className="bg-indigo_901 lg:h-[23px] xl:h-[26px] h-[29.21px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius14605 w-[32%]"></div>
          </Column>
          <Text className="font-medium mb-[10.96px] lg:ml-[17px] xl:ml-[19px] ml-[22.22px] 2xl:ml-[22px] 3xl:ml-[26px] mt-[10.95px] 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] text-bluegray_900 lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-left tracking-ls11 w-[auto]">{`Annually`}</Text>
        </Row>
        <List
          className="lg:gap-[17px] xl:gap-[19px] gap-[22.220001px] 2xl:gap-[22px] 3xl:gap-[26px] grid grid-cols-3 min-h-[auto] lg:mt-[25px] xl:mt-[29px] mt-[32.85px] 2xl:mt-[32px] 3xl:mt-[39px] mx-[auto] w-[77%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 items-center justify-end lg:pb-[24px] xl:pb-[28px] pb-[31.84px] 2xl:pb-[31px] 3xl:pb-[38px] lg:pt-[36px] xl:pt-[41px] pt-[46.3px] 2xl:pt-[46px] 3xl:pt-[55px] lg:px-[17px] xl:px-[19px] px-[22.22px] 2xl:px-[22px] 3xl:px-[26px] rounded-radius1296 shadow-bs w-[100%]">
            <Text className="font-bold mx-[auto] text-center lg:text-fs17 xl:text-fs19 2xl:text-fs22 text-fs22219995498657227 3xl:text-fs26 text-gray_900 w-[auto]">{`Standard`}</Text>
            <Text className="font-normal lg:leading-lh17 xl:leading-lh19 2xl:leading-lh22 leading-lh2222 3xl:leading-lh26 lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] mx-[auto] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_500 w-[77%]">{`The national average cost of buying coin easy.`}</Text>
            <Row className="items-end justify-center lg:mt-[26px] xl:mt-[30px] mt-[34.25px] 2xl:mt-[34px] 3xl:mt-[41px] mx-[auto] w-[37%]">
              <Text className="font-bold lg:text-fs40 xl:text-fs46 2xl:text-fs51 text-fs5184666061401367 3xl:text-fs62 text-gray_900 text-left w-[auto]">{`$5`}</Text>
              <Text className="font-medium lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_501 text-left tracking-ls1 w-[auto]">{`/month`}</Text>
            </Row>
            <Button className="bg-indigo_902 font-bold lg:mt-[30px] xl:mt-[34px] mt-[38.89px] 2xl:mt-[38px] 3xl:mt-[46px] mx-[auto] lg:py-[11px] xl:py-[13px] py-[14.814999px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius741 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-white_A700 tracking-ls1 w-[88%]">{`Select Plan`}</Button>
            <Column className="lg:mt-[34px] xl:mt-[39px] mt-[44.44px] 2xl:mt-[44px] 3xl:mt-[53px] mx-[auto] w-[88%]">
              <Row className="items-center justify-start w-[100%]">
                <Image
                  src={"images/img_group2148.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2148"
                />
                <Text className="font-medium ml-[10.18px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`5 collections`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2154.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2154"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Worldwide accessbility`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2155.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2155"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`25 automation actions`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2156.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Access all features`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2156_1.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`24 hours support`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2156_2.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium line-through 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Sync accross devices`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                <Image
                  src={"images/img_group2156_3.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium line-through 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Share with more 5 users`}</Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-indigo_902 items-center justify-end lg:pb-[24px] xl:pb-[28px] pb-[31.84px] 2xl:pb-[31px] 3xl:pb-[38px] lg:pt-[36px] xl:pt-[41px] pt-[46.3px] 2xl:pt-[46px] 3xl:pt-[55px] lg:px-[17px] xl:px-[19px] px-[22.22px] 2xl:px-[22px] 3xl:px-[26px] rounded-radius1296 shadow-bs w-[100%]">
            <Text className="font-bold mx-[auto] text-center lg:text-fs17 xl:text-fs19 2xl:text-fs22 text-fs22219995498657227 3xl:text-fs26 text-white_A700 w-[auto]">{`Extended`}</Text>
            <Text className="font-normal lg:leading-lh17 xl:leading-lh19 2xl:leading-lh22 leading-lh2222 3xl:leading-lh26 lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] mx-[auto] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_200 w-[77%]">{`The national average cost of buying coin easy.`}</Text>
            <Row className="items-end justify-center lg:mt-[26px] xl:mt-[30px] mt-[34.25px] 2xl:mt-[34px] 3xl:mt-[41px] mx-[auto] w-[43%]">
              <Text className="font-bold lg:text-fs40 xl:text-fs46 2xl:text-fs51 text-fs5184666061401367 3xl:text-fs62 text-left text-white_A700 w-[auto]">{`$12`}</Text>
              <Text className="font-medium ml-[0] lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_501 text-left tracking-ls1 w-[auto]">{`/month`}</Text>
            </Row>
            <Button className="bg-white_A700 font-bold lg:mt-[30px] xl:mt-[34px] mt-[38.89px] 2xl:mt-[38px] 3xl:mt-[46px] mx-[auto] lg:py-[11px] xl:py-[13px] py-[14.814999px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius741 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-indigo_901 tracking-ls1 w-[88%]">{`Select Plan`}</Button>
            <Column className="lg:mt-[34px] xl:mt-[39px] mt-[44.44px] 2xl:mt-[44px] 3xl:mt-[53px] mx-[auto] w-[88%]">
              <Row className="items-center justify-start w-[100%]">
                <Image
                  src={"images/img_group2148_1.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2148"
                />
                <Text className="font-medium ml-[10.18px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Unlimited collections`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2154_1.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2154"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Worldwide accessbiliy`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2155_1.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2155"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Unlimited automation actions`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_4.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Access all features`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_5.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`24 hours support`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_6.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Sync accross devices`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_7.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-left text-white_A700 tracking-ls1 w-[auto]">{`Share with more 5 users`}</Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-center justify-end lg:pb-[24px] xl:pb-[28px] pb-[31.84px] 2xl:pb-[31px] 3xl:pb-[38px] lg:pt-[36px] xl:pt-[41px] pt-[46.3px] 2xl:pt-[46px] 3xl:pt-[55px] lg:px-[17px] xl:px-[19px] px-[22.22px] 2xl:px-[22px] 3xl:px-[26px] rounded-radius1296 shadow-bs w-[100%]">
            <Text className="font-bold mx-[auto] text-center lg:text-fs17 xl:text-fs19 2xl:text-fs22 text-fs22219995498657227 3xl:text-fs26 text-gray_900 w-[auto]">{`Premium+`}</Text>
            <Text className="font-normal lg:leading-lh17 xl:leading-lh19 2xl:leading-lh22 leading-lh2222 3xl:leading-lh26 lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] mx-[auto] not-italic text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_500 w-[77%]">{`The national average cost of buying coin easy.`}</Text>
            <Row className="items-end justify-center lg:mt-[26px] xl:mt-[30px] mt-[34.25px] 2xl:mt-[34px] 3xl:mt-[41px] mx-[auto] w-[44%]">
              <Text className="font-bold lg:text-fs40 xl:text-fs46 2xl:text-fs51 text-fs5184666061401367 3xl:text-fs62 text-gray_900 text-left w-[auto]">{`$16`}</Text>
              <Text className="font-medium lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-gray_501 text-left tracking-ls1 w-[auto]">{`/month`}</Text>
            </Row>
            <Button className="bg-indigo_902 font-bold lg:mt-[30px] xl:mt-[34px] mt-[38.89px] 2xl:mt-[38px] 3xl:mt-[46px] mx-[auto] lg:py-[11px] xl:py-[13px] py-[14.814999px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius741 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs14 text-fs1481333065032959 3xl:text-fs17 text-white_A700 tracking-ls1 w-[88%]">{`Select Plan`}</Button>
            <Column className="lg:mt-[34px] xl:mt-[39px] mt-[44.44px] 2xl:mt-[44px] 3xl:mt-[53px] mx-[auto] w-[88%]">
              <Row className="items-center justify-start w-[100%]">
                <Image
                  src={"images/img_group2148_2.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2148"
                />
                <Text className="font-medium ml-[10.18px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Unlimited collections`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2154_2.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2154"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Worldwide accessbiliy`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2155_2.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2155"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Unlimited automation actions`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_8.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Access all features`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_9.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`24 hours support`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_10.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Sync accross devices`}</Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[17px] xl:mt-[19px] mt-[22.22px] 2xl:mt-[22px] 3xl:mt-[26px] pr-[1px] w-[100%]">
                <Image
                  src={"images/img_group2156_11.svg"}
                  className="lg:h-[15px] xl:h-[17px] h-[18.52px] 2xl:h-[19px] 3xl:h-[23px] mb-[1px] object-contain lg:w-[14px] xl:w-[16px] w-[18.52px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Group2156"
                />
                <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] ml-[9.25px] 2xl:ml-[9px] lg:text-fs10 xl:text-fs11 2xl:text-fs12 text-fs12961665153503418 3xl:text-fs15 text-gray_900 text-left tracking-ls1 w-[auto]">{`Share with more 10 users`}</Text>
              </Row>
            </Column>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default PricingPage;
