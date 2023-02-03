import { sanityClient } from "@/sanity";
import React from "react";
import { isMultiple } from "@/utils";
import Image from "../../components/Image";
const Property = ({
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  rewiews,
}) => {
  var reiwewAmount = rewiews?.length;
  console.log(mainImage);
  return (
    <section className="slug">
      <div className="container">
        <h1>
          <b>{title}</b>
        </h1>
        <h2>
          <b>
            {propertyType} hosted by {host?.name}
          </b>
        </h2>
        <h4>
          {bedrooms} bedroom{isMultiple(bedrooms)} *{beds} bed
          {isMultiple(beds)}
        </h4>
        <div className="images-section">
          <Image
            identifier="main-image
          "
            image={mainImage}
          />
          <div className="sub-image-section">
            {images.map((_key, image) => (
              <Image
                key={`Imaghe_id ${_key.id}`}
                identifier="image"
                image={image}
              />
            ))}
          </div>
        </div>
        <hr />
        <h4>
          <b>Enhanced Clean</b>
        </h4>
        <p>The host is commited to Airbnb's 5-step enhanced cleaning process</p>
        <h4>
          <b>Enhanced Clean</b>
        </h4>
        <p>The host is commited to Airbnb's 5-step enhanced cleaning process</p>
        <h4>
          <b>Enhanced Clean</b>
        </h4>
        <p>The host is commited to Airbnb's 5-step enhanced cleaning process</p>
        <h4>
          <b>Enhanced Clean</b>
        </h4>
        <p>The host is commited to Airbnb's 5-step enhanced cleaning process</p>
        <div className="price-box">
          <h2> ${pricePerNight}</h2>
          <h4>
            {reiwewAmount} rewiew {isMultiple(reiwewAmount)}
          </h4>
          <div className="button" onClick={() => {}}>
            Change Dates
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug || "";

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`;
  const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      },
    };
  }
};

export default Property;
