import Layout from '../components/layout.jsx';
import Navigation from '../components/navigation'
import '../css/style.css'
import '../css/form.css'
import '../style/scss/style.scss'
import app from 'next/app';






export default class MyApp extends app {
    static getInitialProps({ Component, router, ctx }) {
      let pageProps = app.getInitialProps({ Component, router, ctx });
  
  
      return { pageProps };
    }
  
    render() {
      const { Component, pageProps } = this.props;
      return (
        <section id="app">
          
          
          <Layout> 
            <Navigation  />
          
            <Component {...pageProps} /> 
    
          </Layout>
         
        </section>
      );
    }
  }