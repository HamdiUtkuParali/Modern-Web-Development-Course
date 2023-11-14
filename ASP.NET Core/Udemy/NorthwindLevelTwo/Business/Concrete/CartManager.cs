﻿using Business.Abstract;
using Entities.Concrete;
using Entities.DomainModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CartManager : ICartServices
    {
        public void AddToCart(Cart cart, Product product)
        {
            CartLine cartline = cart.CartLines.FirstOrDefault(c=>c.Product.ProductId == product.ProductId);
            if(cartline != null) 
            {
                cartline.Quantity++;
                return;
            }
            else
            {
                cart.CartLines.Add(new CartLine { Product = product, Quantity = 1 });
            }
        }

        public void RemoveFromCart(Cart cart, int productId)
        {
            cart.CartLines.Remove(cart.CartLines.FirstOrDefault(c => c.Product.ProductId==productId));
        }

        public List<CartLine> List(Cart cart)
        {
            return cart.CartLines;
        }

        
    }
}
