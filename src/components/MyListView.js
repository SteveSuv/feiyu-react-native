import React, {useState, useEffect} from 'react';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view';

export default ({
  renderItem = () => null,
  data = [0],
  initRefresh = false,
  onHeaderRefresh,
  onFooterRefresh,
}) => {
  const [dataList, setDataList] = useState(data);
  const [refreshState, setRefreshState] = useState(RefreshState.Idle);

  useEffect(() => {
    initRefresh && onHeaderRefresh();
  }, []);

  // const onHeaderRefresh = () => {
  //   setRefreshState(RefreshState.HeaderRefreshing);

  //   // 模拟网络请求
  //   setTimeout(() => {
  //     // 模拟网络加载失败的情况
  //     if (Math.random() < 0.2) {
  //       setRefreshState(RefreshState.Failure);
  //       return;
  //     }
  //     //获取测试数据
  //     let nowDataList = [...dataList, ...data];
  //     setDataList(nowDataList);
  //     setRefreshState(
  //       dataList.length === 0 ? RefreshState.EmptyData : RefreshState.Idle,
  //     );
  //   }, 2000);
  // };

  // const onFooterRefresh = () => {
  //   setRefreshState(RefreshState.FooterRefreshing);

  //   // 模拟网络请求
  //   setTimeout(() => {
  //     // 模拟网络加载失败的情况
  //     if (Math.random() < 0.2) {
  //       setRefreshState(RefreshState.Failure);
  //       return;
  //     }
  //     //获取测试数据
  //     let nowDataList = [...dataList, ...data];
  //     setDataList(nowDataList);
  //     setRefreshState(
  //       dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
  //     );
  //   }, 2000);
  // };

  return (
    <RefreshListView
      data={dataList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      refreshState={refreshState}
      onHeaderRefresh={onHeaderRefresh}
      onFooterRefresh={onFooterRefresh}
      // 可选
      footerRefreshingText="玩命加载中 >.<"
      footerFailureText="我擦嘞，居然失败了 =.=!"
      footerNoMoreDataText="-我是有底线的-"
      footerEmptyDataText="-好像什么东西都没有-"
    />
  );
};
