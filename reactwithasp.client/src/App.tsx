import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import './App.css';
import { AppLayout } from './ui/AppLayout/AppLayout';
import { PrimaryAppbar } from './ui/PrimaryAppbar';
import { MainContent } from './ui/MainContent/MainContent';
import { SecondaryAppbar } from './ui/SecondaryAppbar';
import { MobileAppbar } from './ui/MobileAppbar';
import { MobileBottomNav } from './ui/MobileBottomNav';
import { MainContentMobile } from './ui/MainContentMobile';

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: number;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  locationId: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  favorite: boolean;
  contact: string;
  isSpecial: boolean;
  images: string[];
  thumbnail: string;
  address: Address;
  coordinates: Coordinates;
}

function App() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMobilePrimaryView, setSelectedMobilePrimaryView] = useState(0);

  useEffect(() => {
    populateLocationData();
  }, []);
  return (
    <>
      <CssBaseline />
      <AppLayout>
        <AppLayout.AppBar>
          <PrimaryAppbar />
          <MobileAppbar />
        </AppLayout.AppBar>
        <AppLayout.FilterBar>
          <SecondaryAppbar />
        </AppLayout.FilterBar>
        <AppLayout.Content>
          {loading === false && <MainContent locations={locations} />}
          {loading === false && (
            <MainContentMobile
              locations={locations}
              selectedMobilePrimaryView={selectedMobilePrimaryView}
            />
          )}
        </AppLayout.Content>
        <AppLayout.BottomNav>
          <MobileBottomNav
            selectedMobilePrimaryView={selectedMobilePrimaryView}
            setSelectedMobilePrimaryView={setSelectedMobilePrimaryView}
          />
        </AppLayout.BottomNav>
      </AppLayout>
    </>
  );

  async function populateLocationData() {
    setLoading(true);
    try {
      const response = await fetch('locations');
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setLocations(data);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  }
}

export default App;
