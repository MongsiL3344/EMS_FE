"use client";

import Sidebar from "@/components/userMainPage/Sidebar";
import Header from "@/components/userMainPage/Header";
import RentalContent from "@/components/rent/RentalContent";
import {PageLayout, ContentArea, MainContainer} from "@/style/RentStyle";

export default function RentPage() {
  return (
      <PageLayout>
        <Sidebar currentPath="/rent"/>
        <ContentArea>
          <Header/>
          <MainContainer>
            <RentalContent/>
          </MainContainer>
        </ContentArea>
      </PageLayout>
  );
}
