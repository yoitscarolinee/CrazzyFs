import Head from 'next/head'
import Menu from '../../components/admin/Menu'
import TopMenu from '../../components/admin/TopMenu'

export default function Index() {
    return (
        <>
            <Head>
                <title>Rádio Crazzy - Painel</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            <TopMenu />

        </>
    )

}