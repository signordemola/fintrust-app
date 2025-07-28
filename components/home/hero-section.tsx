import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const tradingViewStyle = {
    display: "block",
    height: "100%",
    width: "100%",
  };

  const tradingViewCopyrightStyle = `
    .tradingview-widget-copyright {
        font-size: 13px !important;
        line-height: 32px !important;
        text-align: center !important;
        vertical-align: middle !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
        color: #B2B5BE !important;
    }

    .tradingview-widget-copyright .blue-text {
        color: #2962FF !important;
    }

    .tradingview-widget-copyright a {
        text-decoration: none !important;
        color: #B2B5BE !important;
    }

    .tradingview-widget-copyright a:visited {
        color: #B2B5BE !important;
    }

    .tradingview-widget-copyright a:hover .blue-text {
        color: #1E53E5 !important;
    }

    .tradingview-widget-copyright a:active .blue-text {
        color: #1848CC !important;
    }

    .tradingview-widget-copyright a:visited .blue-text {
        color: #2962FF !important;
    }
  `;

  return (
    <section
      id="hero"
      className="relative overflow-hidden h-[87dvh] bg-gradient-to-br from-primary-600 to-accent-600"
    >
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="absolute inset-y-0 right-0 w-1/2"></div>
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 space-y-8 px-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Welcome to the future of banking
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-text-white leading-tight">
              Banking that
              <span className="block mt-2 bg-gradient-to-br from-chart-4 to-chart-5 text-transparent bg-clip-text">
                Empowers You
              </span>
            </h1>
            <p className="text-xl text-text-white leading-relaxed max-w-xl">
              Experience a new era of financial freedom with FinTrust Credit
              Union. Where innovative technology meets personal service to help
              you achieve your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-chart-4 to-primary-500 text-text-white font-medium rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <Link href="/sign-up">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"></path>
                  </svg>
                </Link>
              </Button>
              <Button
                asChild
                className="inline-flex items-center justify-center px-8 py-5 bg-text-white/20 backdrop-blur-sm text-text-white font-medium rounded-xl hover:bg-text-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-primary-600/90 to-accent-600/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl overflow-hidden h-[400px]">
              <div className="w-full h-full">
                <div
                  className="tradingview-widget-container"
                  style={{ width: "100%", height: "100%" }}
                >
                  <iframe
                    allowtransparency='true'
                    style={tradingViewStyle}
                    src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22showFloatingTooltip%22%3Atrue%2C%22plotLineColorGrowing%22%3A%22rgba(255%2C%20255%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(255%2C%20255%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(255%2C%20255%2C%20255%2C%200.1)%22%2C%22scaleFontColor%22%3A%22rgba(255%2C%20255%2C%20255%2C%200.5)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Markets%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22d%22%3A%22US%20100%22%7D%2C%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%2FUSD%22%7D%2C%7B%22s%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22d%22%3A%22Bitcoin%22%7D%5D%2C%22originalTitle%22%3A%22Markets%22%7D%5D%2C%22utm_source%22%3A%22www.northstonecu.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22www.northstonecu.com%2F%22%7D"
                    title="market overview TradingView widget"
                    lang="en"
                  ></iframe>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: tradingViewCopyrightStyle,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
