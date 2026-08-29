/* ============================================
   📝 BLOG POSTS DATA
   All posts with full content, slugs, TOC
   Author: Hamad
   ============================================ */

export const blogPosts = [

  /* ════════════════════════════════════════
     POST 1 — React 2025
     ════════════════════════════════════════ */
  {
    id: 1,
    slug: 'react-2026',
    title: 'The Future of React in 2026: What Every Developer Must Know',
    excerpt: 'Exploring React 19, Server Components, concurrent rendering, and the compiler — why React is still the king of frontend.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer with 2+ years building scalable MERN apps, WordPress sites, and modern web experiences.',
    authorAvatar: null,
    date: 'Apr 18, 2026',
    dateISO: '2026-04-18',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'JavaScript', 'Frontend', 'React 19'],
    featured: true,
    toc: [
      { id: 'intro',           title: 'Introduction'            },
      { id: 'react-19',        title: 'React 19 — What\'s New'  },
      { id: 'server-components', title: 'Server Components'     },
      { id: 'compiler',        title: 'The React Compiler'      },
      { id: 'concurrent',      title: 'Concurrent Features'     },
      { id: 'performance',     title: 'Performance Tips'        },
      { id: 'conclusion',      title: 'Conclusion'              },
    ],
    content: [
      {
        type: 'heading',
        id: 'intro',
        level: 2,
        text: 'Introduction',
      },
      {
        type: 'paragraph',
        text: 'React has dominated frontend development for over a decade. But 2025 is different — the framework is undergoing its most significant transformation since hooks were introduced in 2018. If you\'re a developer working with React today, understanding these changes isn\'t optional. It\'s essential.',
      },
      {
        type: 'paragraph',
        text: 'In this article, I\'ll walk you through everything that\'s new, what it means for your day-to-day development, and how to start using these features in your projects today.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'This article assumes basic familiarity with React. If you\'re brand new, start with the official React docs first.',
      },
      {
        type: 'heading',
        id: 'react-19',
        level: 2,
        text: 'React 19 — What\'s New',
      },
      {
        type: 'paragraph',
        text: 'React 19 shipped with several game-changing features that fundamentally change how we think about data fetching, form handling, and state management.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Actions — async functions that handle form submissions and mutations automatically',
          'useActionState — combines state and actions in one hook',
          'useOptimistic — instant UI updates before server confirms',
          'use() — reads promises and context directly in render',
          'ref as a prop — no more forwardRef boilerplate',
          'Document Metadata — title and meta tags directly in JSX',
        ],
      },
      {
        type: 'code',
        language: 'jsx',
        filename: 'LoginForm.jsx',
        code: `// React 19: useActionState
import { useActionState } from 'react';

async function loginAction(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  
  try {
    await loginUser({ email, password });
    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    { success: false, error: null }
  );

  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      
      {state.error && (
        <p className="text-red-500">{state.error}</p>
      )}
      
      <button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
}`,
      },
      {
        type: 'heading',
        id: 'server-components',
        level: 2,
        text: 'Server Components',
      },
      {
        type: 'paragraph',
        text: 'React Server Components (RSC) are the biggest architectural shift React has seen. They run exclusively on the server, reducing JavaScript bundle size and enabling direct database access without an API layer.',
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Server Components don\'t replace Client Components — they complement them. Use Server Components for data fetching and static content, Client Components for interactivity.',
      },
      {
        type: 'code',
        language: 'jsx',
        filename: 'ProductPage.jsx',
        code: `// Server Component — runs on server only
// No 'use client' directive = Server Component by default

async function ProductPage({ params }) {
  // Direct database access — no API needed
  const product = await db.products.findById(params.id);
  const reviews = await db.reviews.findByProduct(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: \${product.price}</p>
      
      {/* Client Component for interactivity */}
      <AddToCartButton productId={product.id} />
      
      <ReviewsList reviews={reviews} />
    </div>
  );
}

// Client Component — only what needs interactivity
'use client';
function AddToCartButton({ productId }) {
  const [added, setAdded] = useState(false);
  
  return (
    <button onClick={() => {
      addToCart(productId);
      setAdded(true);
    }}>
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}`,
      },
      {
        type: 'heading',
        id: 'compiler',
        level: 2,
        text: 'The React Compiler',
      },
      {
        type: 'paragraph',
        text: 'The React Compiler (previously React Forget) automatically memoizes your components. This means you can say goodbye to manually writing useMemo, useCallback, and memo() in most cases.',
      },
      {
        type: 'code',
        language: 'jsx',
        filename: 'ExpensiveList.jsx',
        code: `// BEFORE React Compiler — manual memoization everywhere
const ExpensiveList = memo(({ items, onSelect }) => {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  
  const handleSelect = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => handleSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
});

// AFTER React Compiler — write normal React, compiler handles it
function ExpensiveList({ items, onSelect }) {
  const sortedItems = items.sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}`,
      },
      {
        type: 'heading',
        id: 'concurrent',
        level: 2,
        text: 'Concurrent Features',
      },
      {
        type: 'paragraph',
        text: 'Concurrent React enables React to prepare multiple versions of the UI at the same time. This makes your app feel more responsive, especially when dealing with slow data or heavy computations.',
      },
      {
        type: 'list',
        style: 'numbered',
        items: [
          'useTransition — mark updates as non-urgent, keep UI responsive',
          'useDeferredValue — defer expensive re-renders',
          'Suspense — show fallback while data loads',
          'startTransition — trigger concurrent updates programmatically',
        ],
      },
      {
        type: 'heading',
        id: 'performance',
        level: 2,
        text: 'Performance Tips for 2025',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Use Server Components for all data fetching — eliminate client-side loading states',
          'Enable the React Compiler in your build config — free memoization',
          'Use Suspense boundaries strategically — stream content as it\'s ready',
          'Avoid prop drilling — use context or Zustand for shared state',
          'Code split aggressively with React.lazy() and dynamic imports',
          'Use useId() for SSR-safe unique IDs, not Math.random()',
        ],
      },
      {
        type: 'heading',
        id: 'conclusion',
        level: 2,
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: 'React in 2025 is faster, more intuitive, and more powerful than ever. Server Components reduce bundle sizes dramatically, the Compiler eliminates boilerplate, and new hooks like useActionState make form handling genuinely pleasant.',
      },
      {
        type: 'paragraph',
        text: 'My advice: start experimenting with React 19 features in a side project today. The mental model shift takes time, but once it clicks, you\'ll never want to go back.',
      },
      {
        type: 'callout',
        variant: 'success',
        text: 'Ready to level up? Check out the official React 19 migration guide and start with one new feature at a time. Don\'t try to learn everything at once.',
      },
    ],
  },

  /* ════════════════════════════════════════
     POST 2 — Node.js REST API
     ════════════════════════════════════════ */
  {
    id: 2,
    slug: 'nodejs-rest-api-guide',
    title: 'Building Scalable REST APIs with Node.js & Express',
    excerpt: 'A complete guide to structuring production-ready APIs — error handling, authentication, rate limiting, and deployment.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer specializing in MERN Stack, REST APIs, and scalable backend architecture.',
    date: 'Mar 22, 2026',
    dateISO: '2026-03-22',
    readTime: '10 min read',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    featured: true,
    toc: [
      { id: 'intro',        title: 'Introduction'          },
      { id: 'structure',    title: 'Project Structure'     },
      { id: 'middleware',   title: 'Essential Middleware'  },
      { id: 'auth',         title: 'JWT Authentication'    },
      { id: 'error',        title: 'Error Handling'        },
      { id: 'rate-limit',   title: 'Rate Limiting'         },
      { id: 'deployment',   title: 'Deployment'            },
    ],
    content: [
      {
        type: 'heading', id: 'intro', level: 2,
        text: 'Introduction',
      },
      {
        type: 'paragraph',
        text: 'Building a REST API that works in development is easy. Building one that holds up under real production traffic — with proper auth, error handling, and security — is a different story. In this guide, I\'ll share exactly how I structure my Node.js APIs for client projects.',
      },
      {
        type: 'heading', id: 'structure', level: 2,
        text: 'Project Structure',
      },
      {
        type: 'code',
        language: 'bash',
        filename: 'Project Structure',
        code: `src/
├── config/
│   ├── db.js          # MongoDB connection
│   └── env.js         # Environment variables
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   ├── auth.js        # JWT verification
│   ├── errorHandler.js
│   └── rateLimiter.js
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
│   └── users.js
├── utils/
│   └── apiResponse.js
└── index.js`,
      },
      {
        type: 'heading', id: 'middleware', level: 2,
        text: 'Essential Middleware',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'index.js',
        code: `import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

// Security
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));

// Request parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Rate limiting
app.use('/api', rateLimiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Global error handler (must be last)
app.use(errorHandler);

export default app;`,
      },
      {
        type: 'heading', id: 'auth', level: 2,
        text: 'JWT Authentication',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'middleware/auth.js',
        code: `import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized — no token' 
      });
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user to request
    req.user = await User.findById(decoded.id).select('-password');
    
    next();
  } catch (err) {
    res.status(401).json({ 
      success: false, 
      message: 'Token invalid or expired' 
    });
  }
};

// Role-based access control
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: \`Role \${req.user.role} cannot access this route\`
      });
    }
    next();
  };
};`,
      },
      {
        type: 'heading', id: 'error', level: 2,
        text: 'Error Handling',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'middleware/errorHandler.js',
        code: `export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    error = { message: 'Resource not found', statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = { 
      message: \`\${field} already exists\`, 
      statusCode: 400 
    };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message);
    error = { message, statusCode: 400 };
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};`,
      },
      {
        type: 'heading', id: 'rate-limit', level: 2,
        text: 'Rate Limiting',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'middleware/rateLimiter.js',
        code: `import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests, please try again after 15 minutes'
  }
});

// Stricter limit for auth routes
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many login attempts, please try again later'
  }
});`,
      },
      {
        type: 'heading', id: 'deployment', level: 2,
        text: 'Deployment',
      },
      {
        type: 'list',
        style: 'numbered',
        items: [
          'Use environment variables — never hardcode secrets',
          'Enable CORS only for your specific frontend domain',
          'Set NODE_ENV=production to disable error stack traces',
          'Use PM2 or a process manager for zero-downtime restarts',
          'Deploy to Railway, Render, or VPS for Node.js apps',
          'Add health check endpoint at /api/health for monitoring',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'Always test your API with Postman or Thunder Client before connecting your frontend. It saves hours of debugging.',
      },
    ],
  },

  /* ════════════════════════════════════════
     POST 3 — MERN E-Commerce Case Study
     ════════════════════════════════════════ */
  {
    id: 12,
    slug: 'mern-ecommerce-case-study',
    title: 'Case Study: Building a Multi-Vendor E-Commerce Platform with MERN',
    excerpt: 'How I designed and built a full multi-vendor marketplace — seller dashboards, Stripe payments, order management, and admin panel with role-based access.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer who has built e-commerce platforms, real-time apps, and custom CMS solutions for global clients.',
    date: 'May 10, 2025',
    dateISO: '2025-05-10',
    readTime: '15 min read',
    category: 'Project',
    tags: ['MERN', 'E-Commerce', 'Stripe', 'Case Study'],
    featured: false,
    toc: [
      { id: 'overview',    title: 'Project Overview'    },
      { id: 'tech-stack',  title: 'Tech Stack'          },
      { id: 'architecture', title: 'Architecture'       },
      { id: 'auth',        title: 'Role-Based Auth'     },
      { id: 'payments',    title: 'Stripe Payments'     },
      { id: 'challenges',  title: 'Challenges & Fixes'  },
      { id: 'result',      title: 'Final Result'        },
    ],
    content: [
      {
        type: 'heading', id: 'overview', level: 2,
        text: 'Project Overview',
      },
      {
        type: 'paragraph',
        text: 'A client approached me needing a multi-vendor marketplace — similar to Amazon but for a niche industry. Sellers could register, list products, manage orders, and receive payouts. Buyers could browse, filter, and purchase from multiple vendors in a single checkout.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Project scope: 3 months, solo developer (me), production launch with 50+ initial vendors.',
      },
      {
        type: 'heading', id: 'tech-stack', level: 2,
        text: 'Tech Stack',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Frontend: React.js + Redux Toolkit + Tailwind CSS',
          'Backend: Node.js + Express.js + REST API',
          'Database: MongoDB + Mongoose',
          'Auth: JWT + Refresh Tokens + HTTP-only cookies',
          'Payments: Stripe Connect (multi-vendor payouts)',
          'File Upload: Cloudinary for product images',
          'Deployment: Vercel (frontend) + Railway (backend)',
        ],
      },
      {
        type: 'heading', id: 'architecture', level: 2,
        text: 'Architecture',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'User Model — Role Based',
        code: `const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: {
    type: String,
    enum: ['buyer', 'seller', 'admin'],
    default: 'buyer'
  },
  // Seller-specific fields
  store: {
    name:        String,
    description: String,
    logo:        String,
    stripeId:    String,   // Stripe Connect account ID
    isVerified:  { type: Boolean, default: false }
  },
  // Stripe customer ID for buyers
  stripeCustomerId: String,
}, { timestamps: true });`,
      },
      {
        type: 'heading', id: 'auth', level: 2,
        text: 'Role-Based Auth',
      },
      {
        type: 'paragraph',
        text: 'The platform needed 3 distinct user roles: buyers, sellers, and admins. Each role had completely different dashboards and API access permissions.',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'routes/products.js',
        code: `import { protect, authorize } from '../middleware/auth.js';

// Public — anyone can view products
router.get('/', getProducts);
router.get('/:id', getProduct);

// Seller only — create/edit their products
router.post('/', protect, authorize('seller'), createProduct);
router.put('/:id', protect, authorize('seller'), updateProduct);
router.delete('/:id', protect, authorize('seller', 'admin'), deleteProduct);

// Admin only — approve/reject products
router.patch('/:id/approve', protect, authorize('admin'), approveProduct);`,
      },
      {
        type: 'heading', id: 'payments', level: 2,
        text: 'Stripe Payments',
      },
      {
        type: 'paragraph',
        text: 'The hardest part of the project was implementing Stripe Connect for multi-vendor payouts. Each seller needed their own Stripe account connected to the platform.',
      },
      {
        type: 'code',
        language: 'javascript',
        filename: 'controllers/paymentController.js',
        code: `// Create checkout session with split payments
export const createCheckout = async (req, res) => {
  const { cartItems } = req.body;

  // Group items by seller
  const sellerGroups = groupBy(cartItems, 'sellerId');

  // Create transfer group for atomic payouts
  const transferGroup = \`order_\${Date.now()}\`;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: cartItems.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    payment_intent_data: {
      transfer_group: transferGroup,
    },
    success_url: \`\${process.env.CLIENT_URL}/order/success\`,
    cancel_url:  \`\${process.env.CLIENT_URL}/cart\`,
  });

  // Queue transfers to each seller after payment
  await queueSellerTransfers(sellerGroups, transferGroup);

  res.json({ url: session.url });
};`,
      },
      {
        type: 'heading', id: 'challenges', level: 2,
        text: 'Challenges & How I Fixed Them',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Challenge: Split payments across multiple sellers in one checkout → Solution: Stripe Transfer Groups',
          'Challenge: Product approval workflow without real-time notifications → Solution: Email notifications via Nodemailer on status change',
          'Challenge: Seller can only edit their own products → Solution: Middleware checks product.seller === req.user._id',
          'Challenge: Image uploads slowing down API → Solution: Direct Cloudinary upload from frontend, only store URL in MongoDB',
          'Challenge: Cart items from different sellers → Solution: Single checkout with itemized order tracking per seller',
        ],
      },
      {
        type: 'heading', id: 'result', level: 2,
        text: 'Final Result',
      },
      {
        type: 'paragraph',
        text: 'The platform launched on time with 50+ vendors onboarded in the first week. The admin panel gave the client full control over product approvals, seller verification, and revenue reporting. Stripe payouts automated what would have been manual bank transfers.',
      },
      {
        type: 'callout',
        variant: 'success',
        text: 'Key lesson: Plan the data model before writing a single line of code. In a multi-vendor system, getting relationships between Users, Products, and Orders right from the start saves weeks of refactoring.',
      },
    ],
  },

  /* ════════════════════════════════════════
     POST 4 — Business: What Website Do You Need
     ════════════════════════════════════════ */
  {
    id: 16,
    slug: 'what-website-does-your-business-need',
    title: 'What Type of Website Does Your Business Actually Need?',
    excerpt: 'Landing page, portfolio, e-commerce, or web app? A clear guide for business owners to understand which solution fits their goals and budget.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer who helps businesses choose and build the right digital solution — from simple landing pages to complex web apps.',
    date: 'Jan 11, 2025',
    dateISO: '2025-01-11',
    readTime: '7 min read',
    category: 'Business',
    tags: ['Business', 'Web Strategy', 'Startups', 'Digital'],
    featured: false,
    toc: [
      { id: 'intro',        title: 'The Problem'          },
      { id: 'landing',      title: 'Landing Pages'        },
      { id: 'portfolio',    title: 'Portfolio Sites'      },
      { id: 'ecommerce',    title: 'E-Commerce Stores'    },
      { id: 'webapp',       title: 'Web Applications'     },
      { id: 'cms',          title: 'CMS / Blogs'          },
      { id: 'decision',     title: 'Decision Guide'       },
    ],
    content: [
      {
        type: 'heading', id: 'intro', level: 2,
        text: 'The Problem Most Business Owners Face',
      },
      {
        type: 'paragraph',
        text: 'Every week I talk to business owners who either overpaid for a complex system they don\'t need, or underpaid for a basic template that can\'t support their growth. The problem isn\'t the budget — it\'s choosing the wrong type of website from the start.',
      },
      {
        type: 'paragraph',
        text: 'This guide will help you understand the 5 main types of websites, what each costs, and which one your business actually needs.',
      },
      {
        type: 'heading', id: 'landing', level: 2,
        text: '1. Landing Pages',
      },
      {
        type: 'paragraph',
        text: 'A landing page is a single-page site with one goal: convert visitors into leads or customers. No navigation, no blog, no about page — just a compelling offer and a call to action.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Best for: Product launches, ad campaigns, event registrations, lead generation',
          'Typical cost: $50 – $500',
          'Build time: 1–3 days',
          'Technology: HTML/CSS, React, or even Webflow',
          'Not suitable for: Companies needing ongoing content or complex functionality',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        text: 'If you\'re running Facebook or Google Ads, always send traffic to a dedicated landing page — never your homepage. Conversion rates are 2–5x higher.',
      },
      {
        type: 'heading', id: 'ecommerce', level: 2,
        text: '3. E-Commerce Stores',
      },
      {
        type: 'paragraph',
        text: 'If you\'re selling physical or digital products, you need an e-commerce solution. The choice between Shopify, WooCommerce, or a custom MERN store depends entirely on your scale and customization needs.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Shopify: Best for 1–1000 products, quick launch, minimal tech knowledge needed',
          'WooCommerce: Best for WordPress-based businesses, more customization than Shopify',
          'Custom MERN: Best for unique requirements, high volume, or multi-vendor marketplaces',
          'Typical cost: $200 (Shopify template) → $5,000+ (custom MERN store)',
        ],
      },
      {
        type: 'heading', id: 'webapp', level: 2,
        text: '4. Web Applications',
      },
      {
        type: 'paragraph',
        text: 'A web application is software that runs in a browser. If your business has unique workflows — booking systems, CRM, dashboards, student portals — a web app is what you need.',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Booking and appointment systems (clinics, salons, lawyers)',
          'Property management platforms (real estate agencies)',
          'Student and teacher portals (schools and universities)',
          'Inventory and order management (warehouses and retailers)',
          'Typical cost: $2,000 – $20,000+ depending on complexity',
        ],
      },
      {
        type: 'heading', id: 'decision', level: 2,
        text: 'Quick Decision Guide',
      },
      {
        type: 'list',
        style: 'numbered',
        items: [
          'Running a campaign or launching a product? → Landing Page',
          'Showing your work to potential clients? → Portfolio Site',
          'Selling products online? → Shopify (simple) or Custom Store (complex)',
          'Need users to login and do tasks? → Web Application',
          'Sharing content regularly? → CMS (WordPress)',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Not sure which category you fall into? Contact me and I\'ll give you a free 15-minute consultation to point you in the right direction.',
      },
    ],
  },

  /* ════════════════════════════════════════
     POST 5 — WordPress Theme Dev
     ════════════════════════════════════════ */
  {
    id: 8,
    slug: 'wordpress-custom-theme-2025',
    title: 'WordPress Custom Theme Development from Scratch in 2025',
    excerpt: 'Build a professional WordPress theme using PHP, ACF, custom post types, and the block editor without page builders.',
    author: 'Hamad',
    authorBio: 'WordPress developer with 2+ years building custom themes and plugins for agencies and businesses.',
    date: 'Sep 6, 2025',
    dateISO: '2025-09-06',
    readTime: '13 min read',
    category: 'WordPress',
    tags: ['WordPress', 'PHP', 'Theme Development'],
    featured: false,
    toc: [
      { id: 'intro',    title: 'Introduction'         },
      { id: 'setup',    title: 'Theme Setup'          },
      { id: 'structure', title: 'File Structure'      },
      { id: 'functions', title: 'Functions.php'       },
      { id: 'cpt',      title: 'Custom Post Types'    },
      { id: 'acf',      title: 'ACF Fields'           },
      { id: 'tips',     title: 'Pro Tips'             },
    ],
    content: [
      {
        type: 'heading', id: 'intro', level: 2,
        text: 'Why Build a Custom Theme?',
      },
      {
        type: 'paragraph',
        text: 'Page builders like Elementor and Divi are great for quickly launching sites. But they come with bloated code, slow performance, and limited flexibility. When a client needs something truly unique — or when performance is critical — a custom WordPress theme is the answer.',
      },
      {
        type: 'heading', id: 'setup', level: 2,
        text: 'Theme Setup',
      },
      {
        type: 'code',
        language: 'css',
        filename: 'style.css — Theme Header',
        code: `/*
 Theme Name: Hamad Custom Theme
 Theme URI: https://hamad.dev
 Author: Hamad
 Author URI: https://hamad.dev
 Description: A custom WordPress theme built from scratch
 Version: 1.0.0
 License: GNU General Public License v2 or later
 Text Domain: hamad-theme
*/`,
      },
      {
        type: 'heading', id: 'structure', level: 2,
        text: 'File Structure',
      },
      {
        type: 'code',
        language: 'bash',
        filename: 'Theme Structure',
        code: `hamad-theme/
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── inc/
│   ├── custom-post-types.php
│   ├── acf-fields.php
│   └── helpers.php
├── template-parts/
│   ├── header/
│   ├── footer/
│   └── components/
├── functions.php
├── index.php
├── header.php
├── footer.php
├── page.php
├── single.php
├── archive.php
└── style.css`,
      },
      {
        type: 'heading', id: 'functions', level: 2,
        text: 'Functions.php Essentials',
      },
      {
        type: 'code',
        language: 'php',
        filename: 'functions.php',
        code: `<?php
// Enqueue styles and scripts
function hamad_theme_scripts() {
    wp_enqueue_style(
        'hamad-main',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get('Version')
    );
    
    wp_enqueue_script(
        'hamad-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0.0',
        true
    );
    
    // Pass data to JS
    wp_localize_script('hamad-main', 'hamadVars', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('hamad_nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'hamad_theme_scripts');

// Theme support
function hamad_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['comment-list', 'comment-form', 'search-form']);
    add_theme_support('custom-logo');
    
    // Register nav menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'hamad-theme'),
        'footer'  => __('Footer Menu', 'hamad-theme'),
    ]);
}
add_action('after_setup_theme', 'hamad_theme_setup');`,
      },
      {
        type: 'heading', id: 'cpt', level: 2,
        text: 'Custom Post Types',
      },
      {
        type: 'code',
        language: 'php',
        filename: 'inc/custom-post-types.php',
        code: `<?php
// Register Portfolio CPT
function hamad_register_portfolio_cpt() {
    register_post_type('portfolio', [
        'labels' => [
            'name'          => 'Portfolio',
            'singular_name' => 'Project',
            'add_new_item'  => 'Add New Project',
        ],
        'public'       => true,
        'has_archive'  => true,
        'show_in_rest' => true,    // Enable Gutenberg
        'menu_icon'    => 'dashicons-portfolio',
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
        'rewrite'      => ['slug' => 'portfolio'],
    ]);
}
add_action('init', 'hamad_register_portfolio_cpt');`,
      },
      {
        type: 'heading', id: 'tips', level: 2,
        text: 'Pro Tips',
      },
      {
        type: 'list',
        style: 'numbered',
        items: [
          'Always use child themes if modifying a parent theme — never edit parent directly',
          'Use wp_nonce for all AJAX requests — prevents CSRF attacks',
          'Use get_template_part() for reusable components — keeps code DRY',
          'Register custom image sizes with add_image_size() for consistent thumbnails',
          'Use transients API to cache expensive database queries',
          'Always sanitize inputs and escape outputs — WordPress security 101',
        ],
      },
    ],
  },

  /* ════════════════════════════════════════
     POST 6 — AI Phishing Detection (FYP)
     ════════════════════════════════════════ */
  {
    id: 10,
    slug: 'ai-phishing-detection-bert-cnn',
    title: 'AI-Based Phishing Detection: How I Built It with BERT + CNN',
    excerpt: 'A behind-the-scenes look at my final year project — combining NLP transformers and convolutional neural networks to detect phishing URLs.',
    author: 'Hamad',
    authorBio: 'BSIT graduate with a specialization in AI-based web security. Final year project earned top marks for innovation.',
    date: 'Jul 12, 2025',
    dateISO: '2025-07-12',
    readTime: '14 min read',
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'BERT', 'Python', 'NLP'],
    featured: false,
    toc: [
      { id: 'problem',      title: 'The Problem'          },
      { id: 'approach',     title: 'Hybrid Approach'      },
      { id: 'dataset',      title: 'Dataset'              },
      { id: 'bert',         title: 'BERT Model'           },
      { id: 'cnn',          title: 'CNN Model'            },
      { id: 'fusion',       title: 'Model Fusion'         },
      { id: 'results',      title: 'Results'              },
    ],
    content: [
      {
        type: 'heading', id: 'problem', level: 2,
        text: 'The Problem with Phishing Detection',
      },
      {
        type: 'paragraph',
        text: 'Phishing URLs are getting more sophisticated every year. Traditional rule-based detectors (blacklists, keyword matching) fail against new domains that haven\'t been seen before. My final year project tackled this with a hybrid ML model that could detect phishing from URL structure alone.',
      },
      {
        type: 'callout',
        variant: 'info',
        text: 'Over 3.4 billion phishing emails are sent daily. URL-based detection is the first and most critical line of defense.',
      },
      {
        type: 'heading', id: 'approach', level: 2,
        text: 'The Hybrid Approach: BERT + CNN',
      },
      {
        type: 'paragraph',
        text: 'Instead of choosing between NLP and structural analysis, I combined both. BERT handles semantic understanding of URL text, while CNN extracts spatial patterns from character-level features. Their outputs are fused for the final classification.',
      },
      {
        type: 'heading', id: 'bert', level: 2,
        text: 'BERT for URL Semantics',
      },
      {
        type: 'code',
        language: 'python',
        filename: 'bert_model.py',
        code: `from transformers import BertTokenizer, BertModel
import torch
import torch.nn as nn

class BertURLEncoder(nn.Module):
    def __init__(self):
        super(BertURLEncoder, self).__init__()
        self.bert = BertModel.from_pretrained('bert-base-uncased')
        self.dropout = nn.Dropout(0.3)
        self.classifier = nn.Linear(768, 128)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(
            input_ids=input_ids,
            attention_mask=attention_mask
        )
        # Use [CLS] token representation
        cls_output = outputs.last_hidden_state[:, 0, :]
        cls_output = self.dropout(cls_output)
        return self.classifier(cls_output)

# Tokenize URL
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def tokenize_url(url, max_length=128):
    return tokenizer(
        url,
        max_length=max_length,
        padding='max_length',
        truncation=True,
        return_tensors='pt'
    )`,
      },
      {
        type: 'heading', id: 'cnn', level: 2,
        text: 'CNN for Character-Level Patterns',
      },
      {
        type: 'code',
        language: 'python',
        filename: 'cnn_model.py',
        code: `import torch.nn as nn

class CNNURLClassifier(nn.Module):
    def __init__(self, vocab_size=128, embed_dim=64):
        super(CNNURLClassifier, self).__init__()
        
        self.embedding = nn.Embedding(vocab_size, embed_dim)
        
        # Multiple kernel sizes to capture different n-grams
        self.conv1 = nn.Conv1d(embed_dim, 128, kernel_size=3, padding=1)
        self.conv2 = nn.Conv1d(embed_dim, 128, kernel_size=5, padding=2)
        self.conv3 = nn.Conv1d(embed_dim, 128, kernel_size=7, padding=3)
        
        self.pool = nn.AdaptiveMaxPool1d(1)
        self.fc   = nn.Linear(384, 128)  # 128 * 3 kernels
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.embedding(x).permute(0, 2, 1)
        
        c1 = self.relu(self.pool(self.conv1(x)).squeeze(-1))
        c2 = self.relu(self.pool(self.conv2(x)).squeeze(-1))
        c3 = self.relu(self.pool(self.conv3(x)).squeeze(-1))
        
        combined = torch.cat([c1, c2, c3], dim=1)
        return self.fc(combined)`,
      },
      {
        type: 'heading', id: 'results', level: 2,
        text: 'Results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Accuracy: 97.3% on test set (10,000 URLs)',
          'Precision: 96.8% — low false positives (legitimate sites flagged)',
          'Recall: 97.9% — high true positive rate (phishing sites caught)',
          'F1 Score: 97.3%',
          'Inference time: ~45ms per URL (production-ready)',
          'Compared to single BERT: +2.1% accuracy improvement from CNN fusion',
        ],
      },
      {
        type: 'callout',
        variant: 'success',
        text: 'The hybrid model consistently outperformed both single-model approaches. The key insight: BERT understands "meaning", CNN understands "shape" — together they cover what the other misses.',
      },
    ],
  },
  {
    id: 24,
    slug: 'secure-e-prescription-workflows-company-project',
    title: 'Secure E-Prescription Workflows in a Healthcare Company Project',
    excerpt: 'A practical look at prescription-required product allocation, secure PDF signing, AWS document storage, and audit-friendly workflows from a real company project.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer working on company SaaS products across healthcare commerce, clinic management, and role-based business platforms.',
    date: 'Aug 18, 2026',
    dateISO: '2026-08-18',
    readTime: '9 min read',
    category: 'SaaS',
    tags: ['Company Project', 'Healthcare', 'E-Prescription', 'AWS', 'NestJS'],
    featured: true,
    toc: [
      { id: 'company-context', title: 'Company Project Context' },
      { id: 'prescription-flow', title: 'Prescription Flow' },
      { id: 'documents', title: 'Secure Documents' },
      { id: 'order-safety', title: 'Order Safety' },
      { id: 'lessons', title: 'Lessons Learned' },
    ],
    content: [
      { type: 'heading', id: 'company-context', level: 2, text: 'Company Project Context' },
      { type: 'paragraph', text: 'This article is based on a company project I worked on: a healthcare commerce and e-prescription platform built for professional users, prescribers, patients, and administrators.' },
      { type: 'paragraph', text: 'The product was not just a normal online store. Some products required prescription approval, patient assignment, secure document generation, and clear operational tracking before an order could safely move forward.' },
      { type: 'heading', id: 'prescription-flow', level: 2, text: 'Prescription Flow' },
      { type: 'paragraph', text: 'The core workflow connected product ordering with prescription rules. A practitioner could allocate prescription-required products to patients, assign prescribers, and submit the order only when the required patient and product data was valid.' },
      { type: 'list', style: 'bullet', items: ['Validate prescription-required products before checkout', 'Link each restricted product to the correct patient', 'Apply per-product and category-level quantity rules', 'Notify the assigned prescriber when prescription work is created'] },
      { type: 'callout', variant: 'info', text: 'In healthcare products, checkout logic must care about compliance, not only cart totals.' },
      { type: 'heading', id: 'documents', level: 2, text: 'Secure Documents' },
      { type: 'paragraph', text: 'Prescription PDFs and uploaded documents needed private storage, controlled access, and predictable expiry. AWS S3 signed URLs were useful because files could stay private while still allowing temporary access to authorized users.' },
      { type: 'list', style: 'bullet', items: ['Generate prescription PDFs from validated order data', 'Store clinical documents privately in AWS S3', 'Use time-limited signed URLs for access', 'Keep document access tied to roles and permissions'] },
      { type: 'heading', id: 'order-safety', level: 2, text: 'Order Safety' },
      { type: 'paragraph', text: 'One of the most important engineering concerns was keeping order creation transaction-safe. Stock deduction, payment state, prescription generation, and order summaries had to agree with each other.' },
      { type: 'paragraph', text: 'The backend used modular NestJS services and PostgreSQL-backed workflows so the system could validate pricing, VAT, stock, prescriptions, and order status in a consistent way.' },
      { type: 'heading', id: 'lessons', level: 2, text: 'Lessons Learned' },
      { type: 'list', style: 'numbered', items: ['Model sensitive workflows around business rules first, then UI screens', 'Keep prescription logic server-side and auditable', 'Treat document access as a security feature, not a file-upload detail', 'Write regression tests around high-risk checkout and prescription paths'] },
      { type: 'callout', variant: 'success', text: 'The biggest lesson from this company project was that healthcare commerce requires reliable workflows, clear permissions, and defensive backend design.' },
    ],
  },

  {
    id: 23,
    slug: 'stripe-payments-subscriptions-company-saas',
    title: 'Stripe Payments, Subscriptions, and Webhooks in a Company SaaS Product',
    excerpt: 'How I worked with checkout, subscriptions, webhook idempotency, payment status tracking, and billing workflows inside a production SaaS product.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer working on company SaaS products with Next.js, NestJS, PostgreSQL, AWS, and payment integrations.',
    date: 'Jul 15, 2026',
    dateISO: '2026-07-15',
    readTime: '8 min read',
    category: 'SaaS',
    tags: ['Company Project', 'Stripe', 'SaaS', 'Payments', 'Webhooks'],
    featured: false,
    toc: [
      { id: 'context', title: 'Company SaaS Context' },
      { id: 'checkout', title: 'Checkout and Billing' },
      { id: 'webhooks', title: 'Webhook Reliability' },
      { id: 'entitlements', title: 'Subscriptions and Entitlements' },
      { id: 'takeaways', title: 'Takeaways' },
    ],
    content: [
      { type: 'heading', id: 'context', level: 2, text: 'Company SaaS Context' },
      { type: 'paragraph', text: 'This article comes from payment and billing work I handled inside a company SaaS product. The system needed checkout, subscriptions, payment status tracking, and plan-based access to product features.' },
      { type: 'paragraph', text: 'In SaaS, payment integration is not only about collecting money. It controls onboarding, account access, subscription status, feature limits, and operational support.' },
      { type: 'heading', id: 'checkout', level: 2, text: 'Checkout and Billing' },
      { type: 'paragraph', text: 'The platform used Stripe flows for plan selection, checkout, subscription management, and customer billing actions. The frontend had to keep the flow clear, while the backend stayed responsible for trusted state changes.' },
      { type: 'list', style: 'bullet', items: ['Create checkout sessions from server-side plan data', 'Track subscription and payment state in the database', 'Expose billing status clearly to admins and users', 'Support Customer Portal flows for subscription management'] },
      { type: 'heading', id: 'webhooks', level: 2, text: 'Webhook Reliability' },
      { type: 'paragraph', text: 'Webhook handling is where many payment systems become fragile. Events can arrive more than once, arrive later than expected, or fail during processing. That is why idempotency and event persistence matter.' },
      { type: 'callout', variant: 'tip', text: 'A webhook endpoint should be boring, predictable, and safe to retry. That is a good thing.' },
      { type: 'list', style: 'bullet', items: ['Verify webhook signatures before processing', 'Store received events for audit and retry safety', 'Use idempotency keys to avoid duplicate updates', 'Update subscription entitlements only from trusted backend events'] },
      { type: 'heading', id: 'entitlements', level: 2, text: 'Subscriptions and Entitlements' },
      { type: 'paragraph', text: 'For this company project, subscription plans were connected to feature access and usage limits. That meant the backend had to validate whether a tenant could access a feature before allowing the action.' },
      { type: 'heading', id: 'takeaways', level: 2, text: 'Takeaways' },
      { type: 'list', style: 'numbered', items: ['Do not trust frontend payment state for permissions', 'Keep webhook processing idempotent', 'Connect billing plans to server-side entitlements', 'Give admins clear visibility into payment attempts and subscription state'] },
    ],
  },

  {
    id: 22,
    slug: 'multi-tenant-healthcare-saas-architecture-company-project',
    title: 'Multi-Tenant SaaS Architecture for Healthcare Platforms',
    excerpt: 'Lessons from a company healthcare SaaS project covering tenant isolation, branches, roles, entitlements, and server-side permission checks.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer working on company SaaS products across healthcare, e-commerce, and admin-heavy platforms.',
    date: 'Jun 20, 2026',
    dateISO: '2026-06-20',
    readTime: '10 min read',
    category: 'SaaS',
    tags: ['Company Project', 'Multi-Tenant', 'Healthcare SaaS', 'PostgreSQL', 'NestJS'],
    featured: true,
    toc: [
      { id: 'intro', title: 'Why Multi-Tenant Matters' },
      { id: 'tenant-model', title: 'Tenant Model' },
      { id: 'roles', title: 'Roles and Permissions' },
      { id: 'entitlements', title: 'Feature Entitlements' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    content: [
      { type: 'heading', id: 'intro', level: 2, text: 'Why Multi-Tenant Matters' },
      { type: 'paragraph', text: 'This article is based on a company healthcare SaaS project where the product needed to support multiple clinics, branches, staff members, patients, and platform administrators inside one system.' },
      { type: 'paragraph', text: 'The most important rule was simple: every clinic should feel like it owns its own secure workspace, while the platform still stays manageable from a super-admin level.' },
      { type: 'heading', id: 'tenant-model', level: 2, text: 'Tenant Model' },
      { type: 'paragraph', text: 'A strong tenant model protects data boundaries. Clinic users should only see their clinic data, branch users should work inside their assigned branch context, and platform admins should have controlled access for support and governance.' },
      { type: 'list', style: 'bullet', items: ['Tenant-level records for clinic accounts', 'Branch-level separation for locations and staff', 'Server-side tenant checks on every sensitive API', 'Audit-friendly access patterns for platform support'] },
      { type: 'heading', id: 'roles', level: 2, text: 'Roles and Permissions' },
      { type: 'paragraph', text: 'The platform included clinic owners, practitioners, receptionists, staff, patients, and super administrators. Each role needed different screens, API permissions, and workflow access.' },
      { type: 'callout', variant: 'warning', text: 'Role checks should never live only in the UI. The backend must be the final authority.' },
      { type: 'heading', id: 'entitlements', level: 2, text: 'Feature Entitlements' },
      { type: 'paragraph', text: 'Because this was a SaaS company project, subscription plans and feature gates mattered. A clinic plan could control modules such as booking, forms, inventory, marketing, support, or training features.' },
      { type: 'list', style: 'bullet', items: ['Validate plan access before protected actions', 'Support tenant-specific overrides for business cases', 'Keep feature catalogues shared across portals', 'Make denied access clear and consistent'] },
      { type: 'heading', id: 'conclusion', level: 2, text: 'Conclusion' },
      { type: 'paragraph', text: 'Multi-tenant SaaS architecture is mostly about discipline: trusted server validation, clean data boundaries, predictable roles, and a product model that can grow without mixing customer data.' },
    ],
  },

  {
    id: 21,
    slug: 'role-based-dashboards-nextjs-nestjs-company-project',
    title: 'Building Role-Based Dashboards with Next.js and NestJS',
    excerpt: 'How client, clinic-admin, and super-admin portals can be structured with protected routes, API guards, shared UI, and role-aware product workflows.',
    author: 'Hamad',
    authorBio: 'Full Stack Developer building company SaaS products with Next.js, NestJS, PostgreSQL, AWS, and Git workflows.',
    date: 'May 24, 2026',
    dateISO: '2026-05-24',
    readTime: '8 min read',
    category: 'SaaS',
    tags: ['Company Project', 'Next.js', 'NestJS', 'RBAC', 'Dashboards'],
    featured: false,
    toc: [
      { id: 'context', title: 'Project Context' },
      { id: 'portals', title: 'Portal Structure' },
      { id: 'backend', title: 'Backend Guards' },
      { id: 'frontend', title: 'Frontend UX' },
      { id: 'summary', title: 'Summary' },
    ],
    content: [
      { type: 'heading', id: 'context', level: 2, text: 'Project Context' },
      { type: 'paragraph', text: 'This article is based on a company project where I worked on role-based SaaS dashboards using Next.js, NestJS, PostgreSQL, AWS, and Git-based team workflows.' },
      { type: 'paragraph', text: 'The product needed separate experiences for normal users, clinic administrators, and super administrators. Each portal had different responsibilities, permissions, and data visibility rules.' },
      { type: 'heading', id: 'portals', level: 2, text: 'Portal Structure' },
      { type: 'paragraph', text: 'Role-based products become easier to maintain when each portal has a clear purpose. A client portal should focus on user actions, a clinic-admin portal should focus on operations, and a super-admin portal should focus on platform control.' },
      { type: 'list', style: 'bullet', items: ['Client portal for booking, forms, payments, and personal records', 'Clinic-admin portal for staff, appointments, patients, invoices, and inventory', 'Super-admin portal for tenants, plans, support, risk monitoring, and governance'] },
      { type: 'heading', id: 'backend', level: 2, text: 'Backend Guards' },
      { type: 'paragraph', text: 'The NestJS backend is where permission rules must be enforced. Frontend route protection improves user experience, but API guards protect the actual business data.' },
      { type: 'list', style: 'bullet', items: ['JWT authentication for trusted user identity', 'Role guards for dashboard-level access', 'Feature guards for plan-based modules', 'Tenant and branch validation for sensitive data'] },
      { type: 'heading', id: 'frontend', level: 2, text: 'Frontend UX' },
      { type: 'paragraph', text: 'In Next.js, the UI should guide each role toward the actions they need most. Good dashboards reduce confusion by showing only relevant navigation, metrics, and actions.' },
      { type: 'callout', variant: 'tip', text: 'The best role-based dashboard feels simple because the permission complexity is handled behind the scenes.' },
      { type: 'heading', id: 'summary', level: 2, text: 'Summary' },
      { type: 'paragraph', text: 'This company project strengthened my understanding of SaaS product architecture: separate the portals, centralize the permissions, and make the backend the source of truth.' },
    ],
  },
];

const oldSlugRedirects = {
  'react-2025': 'react-2026',
};

/* ── Helper functions ── */
export const getPostBySlug = (slug) => {
  const resolvedSlug = oldSlugRedirects[slug] || slug;
  return blogPosts.find((p) => p.slug === resolvedSlug) || null;
};

export const getRelatedPosts = (currentPost, count = 3) =>
  blogPosts
    .filter(
      (p) =>
        p.id !== currentPost.id &&
        (p.category === currentPost.category ||
          p.tags.some((t) => currentPost.tags.includes(t)))
    )
    .slice(0, count);

export const getPrevNextPosts = (currentPost) => {
  const index = blogPosts.findIndex((p) => p.id === currentPost.id);
  return {
    prev: index > 0 ? blogPosts[index - 1] : null,
    next: index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
};

export default blogPosts;
