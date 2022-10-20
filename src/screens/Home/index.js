import {FlatList, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CardComp from '../../components/CardComp';
import postData from '../../utils/post.json';
import userData from '../../utils/user.json';

const Home = () => {
  const [feedsData, setFeedsData] = useState([]);
  const mergingData = () => {
    let arr = [];
    for (let i = 0; i < postData.length; i++) {
      for (let j = 0; j < userData.length; j++) {
        if (postData[i].user_id === userData[j].id) {
          let obj = {
            post_id: i + 1,
            user_id: postData[i]?.user_id,
            postImage: postData[i]?.imageUrl,
            postText: postData[i]?.text,
            id: userData[j]?.id,
            profileUrl: userData[j]?.imageUrl,
            name: userData[j]?.name,
            position: userData[j]?.position,
          };
          arr.push(obj);
        }
      }
    }
    setFeedsData(arr);
  };

  useEffect(() => {
    mergingData();
  }, []);

  const renderItem = useCallback(
    ({item, index}) => {
      return <CardComp item={item} key={index} />;
    },
    [feedsData],
  );

  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [feedsData]);

  return (
    <>
      <FlatList
        style={{backgroundColor: '#F3F8FB'}}
        data={feedsData}
        renderItem={renderItem}
        keyExtractor={item => item.post_id}
        ItemSeparatorComponent={itemSeparatorComponent}
        // onEndReached
      />
    </>
  );
};

export default Home;
