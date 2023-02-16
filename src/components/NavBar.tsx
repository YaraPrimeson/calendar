import React, {FC} from 'react';
import {Layout, Card, Row} from 'antd';
import {useHistory} from "react-router";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


const NavBar: FC = () => {
    const router = useHistory();
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <>
                        <div style={{color: "purple",marginRight:"10px"}}>
                            {user.username}
                        </div>
                        <Card >
                            <div onClick={logout} key={1}>
                                logout
                            </div>
                        </Card>
                    </>
                    :
                    <Card >
                        <div onClick={() => router.push(RouteNames.LOGIN)} key={1}>
                            login
                        </div>
                    </Card>
                }

            </Row>
        </Layout.Header>
    );
};

export default NavBar;
