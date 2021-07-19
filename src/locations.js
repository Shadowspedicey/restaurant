let locations = [];

const Location = (name, src) =>
{
  const _location = { name, src}

  locations.push(_location);

  return _location;
}
Location("El Raml Station Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.754926450716!2d29.897198815498765!3d31.199807870021743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3eddcfc1ec1%3A0x4db3c1cdaeb6c27f!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626726207374!5m2!1sen!2seg");
Location("Al Azaritah Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.2853046922646!2d29.906178851266084!3d31.204917072221512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38c9c7c52c1%3A0x38ba5c28398878a5!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626729324546!5m2!1sen!2seg");
Location("Salah Salem Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1706.4477756574422!2d29.898059265785903!3d31.195909293822822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3e92c5ca165%3A0xec39a47e5a47cd46!2sBrazilian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626729730623!5m2!1sen!2seg");
Location("Gleem Branch", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27295.416389355596!2d29.92003779636806!3d31.222750447198788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a069ac049b9ea2!2sBrazillian%20Coffee%20Stores!5e0!3m2!1sen!2seg!4v1626730139572!5m2!1sen!2seg");

export default locations;