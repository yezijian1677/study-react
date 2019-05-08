import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';
class Topic extends Component {
    render(){
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        // 每次循环都需要return一个对象出去
                        return(
                            <TopicItem key = {item.get('id')} >
                                <img  alt = '' className='topic-pic'
                                src={item.get('imgUrl')}/>
                                {item.get('title')}
                            </TopicItem>
                        );
                    })
                }
                
            </TopicWrapper>
        );
    }
};

const mapState = (state) => ({
    list : state.getIn(['home', 'topicList'])
});

//mapState->mapStateToProps, mapDipatch->方法传递
export default connect(mapState, null)(Topic);