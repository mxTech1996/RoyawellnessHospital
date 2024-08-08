"use client";
import {
  Missions,
  ProductSection,
  References,
  Typography,
  ListFeatures,
  Hero,
  FeaturesV2,
  Features
} from "ecommerce-mxtech";
import { MdOutlineArchitecture } from "react-icons/md";
import { useRouter } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useInformation } from "@/store/useInformation";
import { backgroundColor, primaryColor } from "@/data";


export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  return (
    <main
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Navbar />
      <Hero
        contentThirdSection={
          <Typography.Title className="px-28 text-white drop-shadow-sm">
            Creative Strategies and Effective Distribution to Amplify Your Message
          </Typography.Title>
        }
        variant="img-left"
        heroOptions={{
          withCard: false,
          justifyContent: "center",
        }}
        src={dataSite.image_hero}
        withSubView
        nameSite="Empowering Your Expertise"
        styleImage={{
          borderRadius: 20,
        }}
        stylesContainerImage={{
          padding: 90,
          height: "100vh",
        }}
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        colorText={primaryColor}
      />


      <div id="our-services" className="container mx-auto pt-28" >
        <Typography.Title
          level={2}
          style={{
            color: primaryColor,
          }}
          className="font-medium mb-10 text-center"
        >
          Our Services
        </Typography.Title>
        <Features
          features={dataSite.services.slice(0, 4)}
          variant="background-img"
          textColor="#FFFFFF"
          gridColumns={2}
          brightness={6}
          size="default"
          borderRadius={30}

        />
      </div>
      <div className="container mx-auto pt-36">
        <div id="products" className="" >
          <Typography.Title
            level={2}
            style={{
              color: primaryColor,
            }}
            className="font-medium mb-10 text-center"
          >
            Our Courses
          </Typography.Title>
          {dataSite.products.length > 1 && (
            <ProductSection
              withTitles={false}
              gridColumns={3}

              title=""
              variant="grid"
              buttonAdd={{
                backgroundColor: primaryColor,
                className: "text-black bg-blue-200",
                label: "Add to Cart",
              }}
              buttonRemove={{
                backgroundColor: primaryColor,
                className: "text-black bg-red-500",
                label: "Remove from cart",
              }}
              productItemVariant="horizontal"
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              stylesItem={{
                // backgroundColor: primaryColor,
                borderRadius: 10,
                padding: 10,
                borderColor: primaryColor

              }}
              productVersion="1"
              carouselOptions={{
                backgroundColor: "transparent",
                arrowColor: "black",
                autoPlay: true,
              }}
            />
          )}
        </div>
        <div className="flex flex-col px-28" id="mission">
          <Typography.Title
            level={2}
            color={primaryColor}
            style={{
              color: primaryColor,

            }}
            className="font-medium mb-10 text-center"
          >
            Know Us
          </Typography.Title>
          <Missions
            data={dataSite.info}
            gridColumns={3}
            borderRadius={10}
            variant="text"
            textColor={primaryColor}
          />
        </div>

        <div className="flex flex-col pt-28" id="references">
          <Typography.Title
            level={3}
            className="font-medium mb-10 text-center text-white "
          >
            References
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: "black",
              fade: false,
              autoPlay: true,
              direction: "horizontal",
              autoPlaySpeed: 5000,

            }}
            textColor={backgroundColor}
            variantItem="text"
            variant="carousel"
            backgroundColor={"#E5E5E5"}
            borderRadius={10}
            references={dataSite.references}
            gridColumns={3}
            titleAlign="center"
          />
        </div>

      </div>

      <Footer />
    </main>
  );
}
