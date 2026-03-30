import GlobalCoverageLeft from '@/components/landing/GlobalCoverageLeft';
import GlobalCoverageRight from '@/components/landing/GlobalCoverageRight';

const GlobalCoverage = () => {
  return (
    <section className="w-full  " id="global-coverage">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <GlobalCoverageLeft />
          <GlobalCoverageRight />
        </div>
      </div>
    </section>
  );
};

export default GlobalCoverage;