import React from 'react';
import BarTop from '../../components/BarTop';
import NavBar from '../../components/navbar';
import SearchBar from '../../components/SearchBar';
import ProductCategory from '../../components/ProductCategory';
import CounterInfo from '../../components/CounterInfo';
import Footer from '../../components/rodape';

export default function Home() {
  
  return (
    <>	
			<BarTop />	
			<NavBar />	
      <SearchBar />
      <CounterInfo />
			<Footer />
    </>
  )
}
