import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = ({ contextValue }) => {
  const { scrollPrev } = contextValue;

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex>
  );
}

const RightArrow = ({ contextValue }) => {
  const { scrollNext } = contextValue;

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}

export default function ImageSrollbar({ data }) {
  const [contextValue, setContextValue] = useState(null);

  useEffect(() => {
    const context = useContext(VisibilityContext);
    setContextValue(context);
  }, []);

  return (
    <ScrollMenu LeftArrow={<LeftArrow contextValue={contextValue} />} RightArrow={<RightArrow contextValue={contextValue} />} style={{ overflow: 'hidden' }} >
      {data.map((item) => (
        <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
          <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
        </Box>
      ))}
    </ScrollMenu>
  );
}
