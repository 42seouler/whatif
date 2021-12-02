import React from 'react';
import {useState} from 'react';
import {Pressable, Text} from 'react-native';

type MoreLessProps = {
  truncatedText: string;
  fullText: string;
};

function MoreLess({truncatedText, fullText}: MoreLessProps) {
  const [more, setMore] = useState(false);
  return (
    <Text>
      {!more ? `${truncatedText}...` : fullText}
      <Pressable onPress={() => setMore(!more)}>
        <Text>{more ? 'less' : 'more'}</Text>
      </Pressable>
    </Text>
  );
}

export default MoreLess;
