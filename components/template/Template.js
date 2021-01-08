import Navigation from '../navigation/Navigation';
import Head from 'next/head'

const Template = props => {
    return(
        <>
            <Head>
                <title>Compralotodo</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
            </Head>
            <Navigation />
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Template;