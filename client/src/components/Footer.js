import React from 'react';

const Footer = () => {
    return(
        <div className='h-[580px] w-[1920px] bg-black'>
        <div className='h-[580px] w-[480px]'>
            <div className='text-[32px] text-white'><span>About</span></div>
             <div className='text-[16px] text-white'>we,theluxuryguarantee,areanon-profitassociationofluxurybrandsinvestingintechnologiestoenhancethecustomerexperienceandbuildavirtuousfutureforluxury.westrivetomakeblockchainsolutionsandrelatedtechnologieseasyandavailabletoallluxurybrands.westrivetoprovidetoolstoassistincreatingtransparencyandtrustforallcustomersandstakeholders.</div>
        </div>
        <div className='h-[580px] w-[480px]'>
        <div className='text-[32px] text-white'>Solutions</div>
        <div className='text-[16px] text-white'>The Platform uses Quorum permissioned blockchain
technology at its core. Quorum maintains a common
ledger that can only be updated, block after block, by 
the network consensus that members provide. Each
Brand Stack has to manage at least two Quorum nodes and ensure their liveness.
This blockchain network is completed by the centralized applications part: Blockchain services that allow the connection between the blockchain and other applications.
Off-chain services including APIs used to connect business services to the Platform.
Front-end applications for consumer facing interactions.
API documentation
The Luxury Guarantee provides a state of the art API to interact with the blockchain network. All complexity is abstracted by Luxury Guarantee and any developer can easily and rapidly handle all interactions sith smart contarcts.</div>
        </div>
        <div className='h-[580px] w-[480px]'>
        <div className='text-[32px] text-white'>Membership</div>
        <div className='text-[16px] text-white'>Luxury Guarantee General
Luxury Guarantee is a self-managed offering for brands that care about decentralization and want control over data. The Luxury Guarantee’s software is run directly by the brand and the brand participates  in the blockchain governance.
Luxury Guarantee Corporate
Luxury Guarantee Corporate is an offering for brands that want to quickly leverage the Luxury Guarantee’s software without the hurdle of hosting the solution.
Brands use blockchain as a service without running any node.

</div>
</div>
        
        <div className='h-[580px] w-[480px]'>
        <div className='text-[32px] text-white'>Resources</div>
        <div className='text-[16px] text-white'>Leveraging Blockchain for Supply Chain Transparency in the Luxury Sector.
Using Blockchain to Enhance Luxury Supply Chain Traceability.
Blockchain introduces a shared ledger that can be used as a real-time source of fact between parties in the supply chain. Assets, which could include inventory or credit notes,for instance,are represented on the blockchain to facilitate transactions between parties. RFID tags,NFC chips or QR codes can make the connection to physical assets where needed.
Luxury brands can realize substantial benefits from joining a dedicated supply chain network like Luxury Guarantee. Thanks to a shared, real-time point of truth,blockchain reduces operational errors like missing stock or wrong inventory data. 
</div> 
        </div>
        </div>
    );
};
export default Footer;