/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentBackgroundColor?: 'white' | 'black';
        layout?: 'oneColumn' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
        columnOne: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        columnTwo: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        columnThree: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        selection?: string[] | Product[];
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string;
  parent?: string | Category;
  breadcrumbs: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  title: string;
  description?: string;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        contentBackgroundColor?: 'white' | 'black';
        layout?: 'oneColumn' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
        columnOne: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        columnTwo: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        columnThree: {
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'default' | 'primary' | 'secondary';
          };
        };
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        selection?: string[] | Product[];
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  stripeProductID?: string;
  priceJSON?: string;
  paywall: {
    id?: string;
  }[];
  categories?: string[] | Category[];
  slug?: string;
  skipSync?: boolean;
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  _status?: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItems: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'customer')[];
  stripeCustomerID?: string;
  cart: {
    items: {
      product?: string | Product;
      quantity?: number;
      id?: string;
    }[];
    createdOn?: string;
    lastModified?: string;
  };
  subscriptions: {
    stripeSubscriptionID?: string;
    stripeProductID?: string;
    product?: string | Product;
    status?: 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'trialing' | 'unpaid';
    createdOn?: string;
    lastModified?: string;
    id?: string;
  }[];
  skipSync?: boolean;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  orderedBy: {
    user?: string | User;
    name?: string;
    roles?: ('admin' | 'customer')[];
    stripeCustomerID?: string;
    cart: {
      items: {
        product?: string | Product;
        quantity?: number;
        id?: string;
      }[];
      createdOn?: string;
      lastModified?: string;
    };
    subscriptions: {
      stripeSubscriptionID?: string;
      stripeProductID?: string;
      product?: string | Product;
      status?: 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'trialing' | 'unpaid';
      createdOn?: string;
      lastModified?: string;
      id?: string;
    }[];
    skipSync?: boolean;
  };
  products: {
    product?: string | Product;
    title: string;
    description?: string;
    hero: {
      type: 'highImpact' | 'mediumImpact' | 'lowImpact';
      richText: {
        [k: string]: unknown;
      }[];
      links: {
        link: {
          type?: 'reference' | 'custom';
          newTab?: boolean;
          reference: {
            value: string | Page;
            relationTo: 'pages';
          };
          url: string;
          label: string;
          appearance?: 'default' | 'primary' | 'secondary';
        };
        id?: string;
      }[];
      media: string | Media;
    };
    layout: (
      | {
          ctaBackgroundColor?: 'white' | 'black';
          richText: {
            [k: string]: unknown;
          }[];
          links: {
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference: {
                value: string | Page;
                relationTo: 'pages';
              };
              url: string;
              label: string;
              appearance?: 'primary' | 'secondary';
            };
            id?: string;
          }[];
          id?: string;
          blockName?: string;
          blockType: 'cta';
        }
      | {
          contentBackgroundColor?: 'white' | 'black';
          layout?: 'oneColumn' | 'twoThirdsOneThird' | 'halfAndHalf' | 'threeColumns';
          columnOne: {
            richText: {
              [k: string]: unknown;
            }[];
            enableLink?: boolean;
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference: {
                value: string | Page;
                relationTo: 'pages';
              };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
          };
          columnTwo: {
            richText: {
              [k: string]: unknown;
            }[];
            enableLink?: boolean;
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference: {
                value: string | Page;
                relationTo: 'pages';
              };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
          };
          columnThree: {
            richText: {
              [k: string]: unknown;
            }[];
            enableLink?: boolean;
            link: {
              type?: 'reference' | 'custom';
              newTab?: boolean;
              reference: {
                value: string | Page;
                relationTo: 'pages';
              };
              url: string;
              label: string;
              appearance?: 'default' | 'primary' | 'secondary';
            };
          };
          id?: string;
          blockName?: string;
          blockType: 'content';
        }
      | {
          mediaBlockBackgroundColor?: 'white' | 'black';
          position?: 'default' | 'fullscreen';
          media: string | Media;
          id?: string;
          blockName?: string;
          blockType: 'mediaBlock';
        }
      | {
          introContent: {
            [k: string]: unknown;
          }[];
          populateBy?: 'collection' | 'selection';
          relationTo?: 'products';
          categories?: string[] | Category[];
          selection?: string[] | Product[];
          id?: string;
          blockName?: string;
          blockType: 'archive';
        }
    )[];
    stripeProductID?: string;
    priceJSON?: string;
    paywall: {
      id?: string;
    }[];
    categories?: string[] | Category[];
    slug?: string;
    skipSync?: boolean;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
