import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Avatar, Image} from 'react-native-elements';

export default () => {
  const navigation = useNavigation();

  const images = [
    {
      url:
        'https://sjbz-fd.zol-img.com.cn/t_s230x350c/g6/M00/0E/07/ChMkKl_IZZGIfFR8ABS7Qw4T5F4AAGMQAFankkAFLtb096.jpg',
    },
    {
      url:
        'https://b.zol-img.com.cn/sjbizhi/images/12/230x350/1605161025350.jpg',
    },
    {
      url:
        'https://sjbz-fd.zol-img.com.cn/t_s230x350c/g6/M00/07/01/ChMkKV-g-kuIWAvAABy6BqQklygAAEurAHSci4AHLoe906.jpg',
    },
  ];

  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('Detail');
      }}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: '#fff',
          borderBottomWidth: 0.2,
          borderBottomColor: '#eee',
        }}>
        {/* 头像，用户名，时间等 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              onPress={() => {
                navigation.navigate('Zone');
              }}
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/men/41.jpg',
              }}
              size={35}
            />
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Zone');
                }}>
                <Text style={{fontWeight: 'bold'}}>作者</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, color: '#777', marginRight: 5}}>
                  天津大学
                </Text>
                <Text style={{fontSize: 12, color: '#777'}}>21分钟前</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="more-horizontal" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 标题 */}
        <View
          style={{
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            听说你们在找《新欢渡旧爱》的Dj版？
          </Text>
        </View>

        {/* 内容 */}
        <View
          style={{
            marginBottom: 5,
          }}>
          <Text style={{fontSize: 15, color: '#333'}}>
            女人累了，男人陪！深夜的酒却能填满心，但是清晨的粥比深夜的酒好喝，骗你的人比爱你的人会说，
            孙悟空的压力，八戒的身材，沙僧的发型，唐僧一样的絮絮叨叨，还离西天越来越近！😓
          </Text>
        </View>

        {/* 图片，gif，视频 */}
        <View
          style={{
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {images.map((item, index) => (
            <Image
              key={index}
              source={{
                uri: item.url,
              }}
              style={{width: 118, height: 118, borderRadius: 3}}
              PlaceholderContent={<ActivityIndicator />}
            />
          ))}
        </View>

        {/* 标签 */}
        {/* <View
          style={{
            marginBottom: 10,
          }}></View> */}

        {/* 操作：点赞，分享，转发等 */}
        <View
          style={{
            marginBottom: 10,
            paddingLeft: '45%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="thumbs-up" size={18} style={{color: '#000'}} />
                <Text style={{color: '#777', paddingLeft: 5, fontSize: 12}}>
                  1,556
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="message-circle" size={18} style={{color: '#000'}} />
                <Text style={{color: '#777', paddingLeft: 5, fontSize: 12}}>
                  1,123
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="external-link" size={18} style={{color: '#000'}} />
                <Text style={{color: '#777', paddingLeft: 5, fontSize: 12}}>
                  323
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
