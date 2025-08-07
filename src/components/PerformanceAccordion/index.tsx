// src/components/PerformanceAccordion/index.tsx
'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaRocket, FaMousePointer, FaPaintRoller } from 'react-icons/fa';
import {
  AccordionItem, AccordionHeader, HeaderContent, IconWrapper, Title, ChevronWrapper, AccordionContent, ContentText
} from './PerformanceAccordion.styles';

const accordionData = [
  {
    icon: FaRocket,
    title: 'LCP (Largest Contentful Paint)',
    explanation: '<strong>In simple terms:</strong> How fast the main content of your page loads. <br/><br/> <strong>Analogy:</strong> Imagine walking into a store. If the most interesting products are immediately visible, you\'re likely to stay. If the main shelves are empty for too long, you\'ll walk out. <br/><br/> <strong>Business Benefit:</strong> A fast LCP keeps visitors engaged from the very first second, dramatically reducing bounce rates.'
  },
  {
    icon: FaMousePointer,
    title: 'INP (Interaction to Next Paint)',
    explanation: '<strong>In simple terms:</strong> How quickly the page reacts when you click, tap, or type. <br/><br/> <strong>Analogy:</strong> It\'s like having a conversation. If you ask a question and get an immediate response, the conversation feels smooth. If there\'s a long, awkward pause, it becomes frustrating. <br/><br/> <strong>Business Benefit:</strong> A low INP builds user trust and makes your site feel professional and reliable, not broken or slow.'
  },
  {
    icon: FaPaintRoller,
    title: 'CLS (Cumulative Layout Shift)',
    explanation: '<strong>In simple terms:</strong> How much the page unexpectedly jumps around while loading. <br/><br/> <strong>Analogy:</strong> This is the classic "I tried to click a button, but an ad loaded and I accidentally clicked the ad instead." It\'s annoying and erodes trust. <br/><br/> <strong>Business Benefit:</strong> A low CLS score means a stable, predictable experience, preventing user frustration and accidental clicks.'
  },
];

const Accordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <>
      {accordionData.map((item, index) => (
        <AccordionItem key={item.title}>
          <AccordionHeader
            initial={false}
            onClick={() => setExpanded(expanded === index ? false : index)}
          >
            <HeaderContent>
              <IconWrapper><item.icon /></IconWrapper>
              <Title>{item.title}</Title>
            </HeaderContent>
            <ChevronWrapper
              animate={{ rotate: expanded === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </ChevronWrapper>
          </AccordionHeader>
          <AnimatePresence initial={false}>
            {expanded === index && (
              <AccordionContent
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto' },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <ContentText dangerouslySetInnerHTML={{ __html: item.explanation }} />
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </>
  );
};

export default Accordion;