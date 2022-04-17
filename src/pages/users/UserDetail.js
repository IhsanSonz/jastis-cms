import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router'
import { getUserDetail } from '../../redux/ducks/userDetail';

function UserDetail({user_detail, onLoadData}) {
    const { id } = useParams();

    useEffect(() => {
        onLoadData(id);
    }, [onLoadData]);

    return (
        <div>
            <h1>NEW PAGE : {user_detail.email}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user_detail: state.userDetail.user_detail
})

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadData: (id) => dispatch(getUserDetail(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
