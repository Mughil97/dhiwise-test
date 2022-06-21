import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Stack } from "components/Stack";

const SolutionPage = () => {
  const navigate = useNavigate();

  const handleNavigate1 = () => navigate("/");
  const handleNavigate2 = () => navigate("/");
  const handleNavigate4 = () => navigate("/customer");
  const handleNavigate3 = () => navigate("/pricing");

  return (
    <>
      <Column className="bg-white_A700 font-bevietnampro items-center justify-start mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-indigo_900 items-center justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[28px] xl:pl-[32px] pl-[36px] 3xl:pl-[43px] 3xl:pr-[100px] lg:pr-[65px] xl:pr-[74px] pr-[84px] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] w-[100%]">
            <Image
              src={"images/img_logo_2.png"}
              className="common-pointer lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain w-[3%]"
              onClick={handleNavigate1}
              alt="Logo"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-semibold font-semibold lg:mb-[12px] xl:mb-[13px] mb-[15.5px] 2xl:mb-[15px] 3xl:mb-[18px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] mt-[9.5px] 2xl:mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700 tracking-ls1 w-[auto]"
              onClick={handleNavigate2}
            >{`GroundDesk`}</Text>
            <Row className="items-center justify-center xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[183px] xl:ml-[209px] ml-[235.66px] 2xl:ml-[235px] 3xl:ml-[282px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[20%]">
              <Text className="cursor-pointer font-extrabold hover:font-semibold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]">{`Solution`}</Text>
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate4}
              >{`Customer`}</Text>
              <Text
                className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[auto]"
                onClick={handleNavigate3}
              >{`Pricing`}</Text>
            </Row>
            <Button className="border border-solid border-white_A700 font-normal lg:ml-[235px] xl:ml-[269px] ml-[303px] 3xl:ml-[363px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-white_A700 tracking-ls1 w-[9%]">{`Login`}</Button>
            <Button className="bg-white_A700 font-normal lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] not-italic lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius8 text-center text-deep_purple_A200 lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 tracking-ls1 w-[10%]">{`Sign up`}</Button>
          </Row>
        </header>
        <Text className="capitalize font-bold xl:mt-[111px] mt-[125px] 3xl:mt-[150px] lg:mt-[97px] mx-[auto] text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-gray_900 tracking-ls1 w-[auto]">{`Our Solution for your business`}</Text>
        <Text className="font-normal lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] mx-[auto] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-normal w-[auto]">{`We make it easy for users to use our platform, that's why we provide this benefit.`}</Text>
        <List
          className="lg:gap-[24px] xl:gap-[28px] gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[47px] xl:mt-[54px] mt-[61px] 3xl:mt-[73px] mx-[auto] w-[83%]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-center lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] rounded-radius15 w-[100%]">
            <Stack className="bg-gray_100 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius15 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]">
              <Image
                src={"images/img_protectcloud.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] object-contain rounded-radius15 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="ProtectCloud"
              />
            </Stack>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-bluegray_900 lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-left tracking-normal w-[auto]">{`Finance Security`}</Text>
            <Text className="font-normal leading-lh17000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-normal w-[77%]">{`All information and transactions will be well encrypted and double security in every activity. Safer transactions, calmer users`}</Text>
            <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] text-deep_purple_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-normal underline w-[auto]">{`Learn more`}</Text>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-center lg:pb-[29px] xl:pb-[33px] pb-[38px] 3xl:pb-[45px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] rounded-radius15 w-[100%]">
            <Stack className="bg-gray_100 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius15 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]">
              <Image
                src={"images/img_secure.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] object-contain rounded-radius15 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Secure"
              />
            </Stack>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-bluegray_900 lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-left tracking-normal w-[auto]">{`Synchronization`}</Text>
            <Text className="font-normal leading-lh17000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-normal w-[77%]">{`Synced from a Windows, Mac, or Ubuntu Linux computer to the cloud and vice versa without any problems.`}</Text>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-deep_purple_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-normal underline w-[auto]">{`Learn more`}</Text>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-center lg:pb-[29px] xl:pb-[33px] pb-[38px] 3xl:pb-[45px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] rounded-radius15 w-[100%]">
            <Stack className="bg-gray_100 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius15 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]">
              <Image
                src={"images/img_protectcloud_1.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] object-contain rounded-radius15 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="ProtectCloud"
              />
            </Stack>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-bluegray_900 lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-left tracking-normal w-[auto]">{`Cloud Drive`}</Text>
            <Text className="font-normal leading-lh17000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-normal w-[77%]">{`It doesn't cost a fortune to move your work online —in fact, it's free! Starting from 5 GB of free storage.`}</Text>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-deep_purple_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-normal underline w-[auto]">{`Learn more`}</Text>
          </Column>
          <Column className="bg-white_A700 border border-gray_201 border-solid items-start justify-center lg:pb-[29px] xl:pb-[33px] pb-[38px] 3xl:pb-[45px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] rounded-radius15 w-[100%]">
            <Stack className="bg-gray_100 lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius15 lg:w-[49px] xl:w-[56px] w-[64px] 3xl:w-[76px]">
              <Image
                src={"images/img_target.svg"}
                className="absolute lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] object-contain rounded-radius15 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                alt="Target"
              />
            </Stack>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-bluegray_900 lg:text-fs17 xl:text-fs19 text-fs22 3xl:text-fs26 text-left tracking-normal w-[auto]">{`File Sharing`}</Text>
            <Text className="font-normal leading-lh17000 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-fs10 xl:text-fs12 text-fs14 3xl:text-fs16 text-gray_500 text-left tracking-normal w-[77%]">{`Ease of accessing files locked by someone with the sharing with friend feature so you can enjoy it together.`}</Text>
            <Text className="font-semibold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] text-deep_purple_A200 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-normal underline w-[auto]">{`Learn more`}</Text>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default SolutionPage;
