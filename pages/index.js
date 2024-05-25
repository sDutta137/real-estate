import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import {
  fetchPropertiesForRent,
  fetchPropertiesForSale,
} from "../utils/fetchApi";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose="RENT A HOME"
      title1="Rental Homes for"
      title2="Everyone"
      desc1=" Explore from Apartments, builder floors, villas"
      desc2="and more"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww"
    />
    <Flex flexWrap="wrap">
      {propertiesForRent?.slice(0, 6).map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
    <Banner
      purpose="BUY A HOME"
      title1=" Find, Buy & Own Your"
      title2="Dream Home"
      desc1=" Explore from Apartments, land, builder floors,"
      desc2=" villas and more"
      buttonText="Explore Buying"
      linkName="/search?purpose=for-sale"
      imageUrl="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww"
    />
    <Flex flexWrap="wrap">
      {propertiesForSale?.slice(0, 6).map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  let propertiesForSale = [];
  let propertiesForRent = [];

  try {
    // Fetch properties for sale and for rent
    // This is just a placeholder, replace it with your actual fetch code
    propertiesForSale = await fetchPropertiesForSale();
    propertiesForRent = await fetchPropertiesForRent();
  } catch (error) {
    console.error("Failed to fetch properties:", error);
  }

  return {
    props: {
      propertiesForSale,
      propertiesForRent,
    },
    revalidate: 1, // Re-generate page when request comes in
  };
}

export default Home;
