import {Image, Pressable, Text, TextInput, View} from 'react-native';
import React, {memo} from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../app/theme';
import IconBtn from '../IconBtn';
import TextIcon from '../TextIcon';
import loginUser from '../../utils/loggedUser.json';

const CardComp = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerBox}>
          <Image
            source={{
              uri: item?.profileUrl,
            }}
            style={styles.profileStyle}
          />
          <View style={styles.titleBox}>
            <Text style={styles.title}>
              {item?.name.first} {item?.name.last}
            </Text>
            <Text style={styles.subTitle}>{item?.position}</Text>
          </View>
        </View>
        <IconBtn
          IconComp={
            <Ionicons
              name={'ellipsis-vertical-outline'}
              color={theme.PRIMARY_COLOR}
              size={22}
            />
          }
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{item?.postText}</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: item?.postImage,
            }}
            style={styles.bodyImg}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.firstBox}>
          <TextIcon
            name={'Like'}
            iconComp={
              <FontAwesome
                name={'thumbs-o-up'}
                color={theme.PRIMARY_COLOR}
                size={20}
              />
            }
          />
          <TextIcon
            name={'Comment'}
            iconComp={
              <Ionicons
                name={'chatbubble-ellipses-outline'}
                color={theme.PRIMARY_COLOR}
                size={20}
              />
            }
          />
          <TextIcon
            name={'Share'}
            iconComp={
              <Ionicons
                name={'share-social-outline'}
                color={theme.PRIMARY_COLOR}
                size={20}
              />
            }
          />
          <TextIcon
            name={'Send'}
            iconComp={
              <Feather name={'send'} color={theme.PRIMARY_COLOR} size={20} />
            }
          />
        </View>
        <View style={styles.secondBox}>
          <Image
            source={{
              uri: loginUser[0].profile,
            }}
            style={styles.userProfile}
          />
          <Pressable style={styles.inputBox}>
            <TextInput
              placeholderTextColor={theme.TEXT_COLOR}
              cursorColor={'#333'}
              style={{color: '#333'}}
              placeholder="Add a comment"
            />
            <View style={styles.inputInnerBox}>
              <IconBtn
                IconComp={
                  <Ionicons
                    name={'image-outline'}
                    color={theme.PRIMARY_COLOR}
                    size={22}
                  />
                }
              />
              <IconBtn
                IconComp={
                  <Ionicons
                    name={'send'}
                    color={theme.PRIMARY_COLOR}
                    size={22}
                  />
                }
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default memo(CardComp);
