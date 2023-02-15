import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
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
                        <div style={{color: "purple"}}>
                            {user.username}
                        </div>
                        <Menu selectable={false}>
                            <Menu.Item onClick={logout} key={1}>
                                logout
                            </Menu.Item>
                        </Menu>
                    </>
                    :

                    <Menu selectable={false}>
                        <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
                            login
                        </Menu.Item>
                    </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default NavBar;
